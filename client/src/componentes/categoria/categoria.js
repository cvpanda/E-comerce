import React from 'react'
import {connect} from 'react-redux'

export function Categorias ({categoria}) {
    return(
           <span>{categoria}</span>
            
    )
}

function mapStateToProps(state) {
   
    return {
      Categoria: state.categorias,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }


export default connect(
)(Categorias) 