import React , {useState}from 'react'
import {connect} from 'react-redux'
import {Form , Button , Col ,FormCheck} from 'react-bootstrap'

function ProductManager (props){
    var [seleccion  , setSeleccion] = useState('')

    function agregaSeleccion(event){
        if(!seleccion){ 
            setSeleccion([...seleccion , event.target.value])
        } if (seleccion.includes(event.target.value)){
           var borrar = seleccion.indexOf(event.target.value)
            seleccion.splice(borrar , 1)
            
        } else {
            setSeleccion([...seleccion , event.target.value])
        }
    }

    function seleccionados(){
        if (seleccion){
            {seleccion.map(e => <Button class="btn btn-light">{e}</Button>)}
        } else {
            return <p>nada seleccionado</p>
        }
    }

    return(
        <div>
            {console.log(seleccion)}
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Producto" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" placeholder="$Valor" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridDescription">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control placeholder="Este producto ..." />
                </Form.Group>
                <Form.Row>
                    <Form.Group controlId="formGridDescription">              
                        <Form.Control placeholder="Nombre de Producto" />
                    </Form.Group>

                    <Form.Group>                   
                        <Button variant="primary">Adjuntar</Button>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Categorias</Form.Label>
                    <Form.Group  id="formGridCheckbox">
                       {props.categorias.map(e =>  <Form.Check type="checkbox" label = {e} name = {e} value = {e}
                       onChange= {(event) => agregaSeleccion(event)} />
                       )}
                    <Button>Agregar propiedades</Button>
                    </Form.Group >
                    <Button   type="submit" className="my-1">Add</Button>
                    </Form.Group>
                    <Col sm={6}>
                        <div>
                        {props.seleccionadas && props.seleccionadas.map(e => <div>
                            {e} </div>)}
                        </div>
                    </Col>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>
                   
                   
                  
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
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
    //     buscarProductos: nombre => dispatch(buscarProductos(nombre)),
     };
  }     

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductManager)