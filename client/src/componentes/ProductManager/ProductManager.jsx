    import React , {useState, useEffect}from 'react'
    import {connect} from 'react-redux'
    import {Form , Button , Col} from 'react-bootstrap'
    import {crearProducto , agregarCategoria, buscarProductos,traerCategorias , buscarProductoEditar} from '../../redux/actions'
    import styles from './ProductManager.module.css'
    import Cat from '../Cat/Cat'
    import Filtrador from '../Filtrador/Filtrador'

    export function ProductManager (props){
        var [seleccion  , setSeleccion] = useState('')
        var[ nombre , setNombre] = useState('')
        var[ descripcion , setDescripcion] = useState('')
        var[ valor , setValor] = useState('')
        var[ categoria , setCategoria] = useState('')
        var[ stock , setStock] = useState('')

        
      
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
            alert("producto creado")
            var producto = {nombreproducto:nombre,descripcion,valor,stock,seleccion }
            console.log("esto se manda cuando crea producto =>" +seleccion)
            props.crearProducto(producto)
            setNombre("")
            setValor("")
            setDescripcion("")
            setStock("")
            
            
        }

        function handleCat(event) {
          
            event.preventDefault();
            props.agregarCategoria(categoria)
      
        }
        
     
        
        function handlesubmitBuscar(event) {
            event.preventDefault();
            props.buscarProductos(nombre)
            setNombre(props.productos.nombre)
            setValor(props.productos.valor)
            setDescripcion(props.productos.descripcion)
            setStock(props.productos.nombre)
            
        }
        useEffect(() => {
            props.traerCategorias()
          }, [])
      
   
        
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
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" 
                        onChange={e=> setValor(e.target.value)} value = {valor} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>stock</Form.Label>
                        <Form.Control type="number" 
                        onChange={e=> setStock(e.target.value)} value = {stock} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control placeholder="Este producto ..." 
                        onChange={e=> setDescripcion(e.target.value)} value =  {descripcion} />
                    </Form.Group>
                    <Form.Row>                     
                    <Col >          
                     <Form.Label>Categoria</Form.Label>         
                            <Form.Control type="text" placeholder="Nombre categoria nueva" 
                            onChange={e=> setCategoria(e.target.value)} value = {categoria} />
                            <Button  variant="secondary"  className="my-1" size="sm" 
                            onClick = {e => handleCat(e)}>Crear Categoria</Button>
                        </Col>
                    </Form.Row>
                    <Form.Row>      
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Seleccion Categorias</Form.Label>
                            
                            <Form.Group  >
                            {props.categorias.map(e =>  <Form.Check inline key= {e.id} type="checkbox" 
                            label = {e.nombrecategoria} name = {e.nombrecategoria} value = {e.id}
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
                    </Form.Row>
                    
                    <Form.Row>

                        <Form.Group>                   
                        <Form.File id="exampleFormControlFile1" label="Example file input" />  
                        {/* hay que ver como pasar eso */}
                        </Form.Group>

                        <Col className = {styles.confirmacion} >  
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
        productos: state.productos,
        buscado: state.buscado
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            crearProducto: (datos) => dispatch(crearProducto(datos)),
            agregarCategoria: (datos) => dispatch(agregarCategoria(datos)),
            buscarProductos: (datos) => dispatch(buscarProductos(datos)),
            traerCategorias: () => dispatch(traerCategorias()),
            buscarProductoEditar: (datos) => dispatch(buscarProductoEditar(datos))
        };
    }     

    export default connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ProductManager)