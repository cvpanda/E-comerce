import React ,{useState} from 'react'
import {connect} from 'react-redux'
import { FormCheck, Form} from 'react-bootstrap'
import { filtrarProductos } from '../../redux/actions';

export function Filtrador ({categorias , filtrarProductos}) {
    var [seleccion , setSeleccion] = useState('')
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     filtrarProductos(seleccion)
    // }
    // (event) => setSeleccion([...seleccion , event.target.value])
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

    return(
        <div>
           
           {console.log(seleccion)}
            <Form onSubmit = {(e)=> this.handleSubmit(e)}>
                <h4>Categorias</h4>
                {categorias.map(categoria =>
                <FormCheck type= "checkbox" label = {categoria.nombrecategoria} name = {categoria.nombrecategoria}
                value = {categoria.nombrecategoria} onChange= {(event) => agregaSeleccion(event)} />
                )}
                <input type="submit" value="Submit" />  
                
            </Form>
        </div>
 

    )
}

function mapStateToProps(state) {
   
    return {
      categorias: state.categorias,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        filtrarProductos: categorias => dispatch(filtrarProductos(categorias)),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filtrador)


