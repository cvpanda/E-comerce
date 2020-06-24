import React from 'react'
import {connect} from 'react-redux'

export function Categorias ({categoria}) {
    return(
           <span>{categoria}</span>
            
    )
}

function mapStateToProps(state) {
   
    return {
      categoria: state.productos.categoria,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }


export default connect(
)(Categorias)