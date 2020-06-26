import React , {useState}from 'react'
import {connect} from 'react-redux'
import {Form , Button , Col ,FormCheck} from 'react-bootstrap'
import {crearProducto} from '../../redux/actions'
import styles from './ProductManager.module.css'
import Cat from '../Cat/Cat'

export function ProductManager (props){
    var [seleccion  , setSeleccion] = useState('')
    var[ nombre , setNombre] = useState('')
    var[ descripcion , setDescripcion] = useState('')
    var[ valor , setValor] = useState('')

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
        crearProducto(event.value , seleccion)
    }

  

    return(
        <div>
            <h2 className = {styles.titulo}>Crear Producto Nuevo</h2>
            {console.log(seleccion)}
            <Form className = {styles.form} onSubmit = {e => handleSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Producto" onChange={e=> setNombre(e.target.value)} value = {nombre} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" placeholder="$Valor" onChange={e=> setValor(e.target.value)} value = {valor} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridDescription">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control placeholder="Este producto ..." onChange={e=> setDescripcion(e.target.value)} value =  {descripcion} />
                </Form.Group>
                <Form.Row>
                  

                    
                </Form.Row>

                <Form.Row>
                
                <Col >
                        <div class="border" className = {styles.props}>
                            <Form.Label>Seleccionadas</Form.Label>
                            <Form.Group>
                            {seleccion && seleccion.map(e => 
                            <Cat categorias = {e}/>)}
                            </Form.Group>
                        </div>
                        <Button  variant="secondary"  className="my-1" size="sm">Crear Propiedad</Button>
                    </Col>
                    
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Categorias</Form.Label>
                        <Form.Group  >
                        {props.categorias.map(e =>  <Form.Check inline type="checkbox" label = {e} name = {e} value = {e}
                        onChange= {(event) => agregaSeleccion(event)} />
                        )}
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
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        crearProducto: (datos, categorias) => dispatch(crearProducto(datos , categorias)),
     };
  }     

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductManager)