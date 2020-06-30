    import React , {useState, useEffect, useLayoutEffect}from 'react'
    import {connect} from 'react-redux'
    import {Form , Button , Col} from 'react-bootstrap'
    import {crearProducto , agregarCategoria, prodMod, buscarProductos,traerCategorias} from '../../redux/actions'
    import styles from './ProductManager.module.css'
    import Cat from '../Cat/Cat'

    export function ProductManager (props){
        var [seleccion  , setSeleccion] = useState('')
        var[ nombre , setNombre] = useState('')
        var[ descripcion , setDescripcion] = useState('')
        var[ valor , setValor] = useState('')
        var[ categoria , setCategoria] = useState('')

        function agregaSeleccion(event){
            if(seleccion.length === 0){ 
                setSeleccion([...seleccion , event.target.value])
            } if (seleccion.includes(event.target.value)){
            
                setSeleccion(seleccion.filter(word => word !== event.target.value))
                
            } else {
                setSeleccion([...seleccion , event.target.value])
            }
        }

        function handleSubmit(event) {
            event.preventDefault();
            var producto = {nombreproducto:nombre,descripcion,valor,stock:23}
            props.crearProducto(producto)
            
        }

        function handleCat(event) {

            event.preventDefault();
            props.agregarCategoria(categoria)
        }
        
     
        
        function handlesubmitBuscar(event) {
            event.preventDefault();
            console.log(props.detalle)
            setNombre(props.productos.nombre)
            setValor(props.productos.valor)
            setDescripcion(props.productos.descripcion)
            props.buscarProductos(nombre)
            1
        }
    //   useLayoutEffect(() => {
    //    return traerCategorias()
    //    })
       useLayoutEffect(() => {
        traerCategorias()
           return () => {
            traerCategorias()
           };
       })
   
        console.log(props.productos) 
        return(
            <div>
                <h2 className = {styles.titulo}>Product Management</h2>
                {console.log(seleccion)}

                <Form className = {styles.form} onSubmit = {e => handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder={"Nombre.."} 
                        onChange={e=> setNombre(e.target.value)} value = {nombre} />
                        <Button onClick={e => handlesubmitBuscar(e)} variant="secondary" >
                                Buscar Existente
                            </Button>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" 
                        onChange={e=> setValor(e.target.value)} value = {valor} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control placeholder="Este producto ..." 
                        onChange={e=> setDescripcion(e.target.value)} value =  {descripcion} />
                    </Form.Group>
                    <Form.Row>                     
                    <Col >                   
                            <Form.Control type="text" placeholder="Nombre categoria nueva" 
                            onChange={e=> setCategoria(e.target.value)} value = {categoria} />
                            <Button  variant="secondary"  className="my-1" size="sm" 
                            onClick = {e => handleCat(e)}>Crear Categoria</Button>
                        </Col>
                        
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Categorias</Form.Label>
                            <Form.Group  >
                                {console.log(props.categorias)}
                            {props.categorias.map(e =>  <Form.Check inline key= {e.id} type="checkbox" 
                            label = {e.nombrecategoria} name = {e.nombrecategoria} value = {e.nombrecategoria}
                            onChange= {(event) => agregaSeleccion(event)} />
                            )}
                            <div className = {styles.props}>
                                <Form.Label>Seleccionadas</Form.Label>
                                <Form.Group>
                                {seleccion && seleccion.map(e => 
                                <Cat key={e} categorias = {e}/>)}
                                </Form.Group>
                            </div>
                            </Form.Group >
                        </Form.Group>
                    
                        <Form.Group>                   
                        <Form.File id="exampleFormControlFile1" label="Example file input" />  
                        {/* hay que ver como pasar eso */}
                        </Form.Group>
                    
                    
                    
                    </Form.Row>

                
                    <Form.Row>
                        <Col className = {styles.confirmacion} md={{ span: 6, offset: 3 }}>
                            
                            <Button variant="success" type="submit" >
                                Finalizar
                            </Button>
                            <Button variant="danger" >
                                Cancelar
                            </Button>
                        </Col>
                    </Form.Row>            
                </Form>
            </div>
        )
    }

    function mapStateToProps(state) {
    
        return {
        categorias: state.categorias,
        seleccionadas: state.seleccionadas,
        detalle: state.detalle,
        productos: state.productos
     
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            crearProducto: (datos) => dispatch(crearProducto(datos)),
            agregarCategoria: (datos) => dispatch(agregarCategoria(datos)),
            prodMod: (datos) => dispatch(prodMod(datos)),
            buscarProductos: (datos) => dispatch(buscarProductos(datos))
        };
    }     

    export default connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ProductManager)