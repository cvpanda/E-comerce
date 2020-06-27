import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
   
export function FormProduct({nombre , descripcion , valor,imagen}) {
    function ventanaSecundaria (URL){ 
        window.open(URL,"ventana1","width=400,height=300,scrollbars=NO,resizable=NO") 
     } 
    return ( 
<div>
    <form>
       <p>nombre del producto</p>
        <p>descripcion</p>
           <input></input>
        
        
        <p>precio</p>
           <input></input>
        
        <p>imagen</p>
        <input></input><button>...</button>
        <a href={ventanaSecundaria('http://www.desarrolloweb.com')}>hola</a>
    </form>
</div>


    )
}

function mapStateToProps(state) {
   
    return {
      producto: state.Producto,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(FormProduct)