import React from 'react'
import {connect} from 'react-redux'
import {From , FormCheck, Form} from 'react-bootstrap'

export function Filtrador ({categorias}) {
    return(

        <Form>
            <h4>Categorias</h4>
            {categorias.map(categoria =>
            <FormCheck type= "checkbox" label = {categoria}/>
                )}
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
       
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filtrador)


