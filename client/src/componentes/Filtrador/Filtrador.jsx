import React from 'react'
import {connect} from 'react-redux'
import { FormCheck, Form} from 'react-bootstrap'
import { filtrarProductos } from '../../redux/actions';

export function Filtrador ({categorias , filtrarProductos}) {
    function handleSubmit(event) {
        event.preventDefault();
        filtrarProductos(event.target.value)
    }
    
    return(

        <Form onSubmit = {(e)=> this.handleSubmit(e)}>
            <h4>Categorias</h4>
            {categorias.map(categoria =>
            <FormCheck type= "checkbox" label = {categoria} name = {categoria} value = {categoria}/>
                )}
            <input type="submit" value="Submit" />    
        </Form>
 

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


