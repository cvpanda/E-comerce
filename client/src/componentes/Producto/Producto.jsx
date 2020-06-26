import React from 'react'
import {connect} from 'react-redux'
import styles from './Producto.module.css'
import {Button, Image} from 'react-bootstrap'
// import Categorias from '../Categorias/Categorias'

export function Producto({nombre , descripcion , valor,id,categorias,imagen}) {
    return ( 
    <div className = {styles.producto}>
       
            <h3>{nombre}</h3>
            {/* <h3>{id}</h3> */}
        
            <Image className = {styles.foto} src={imagen} alt= "FOTO" rounded /> 
        <div>
            <p>{descripcion}</p>
            <h4>${valor}</h4>
        </div>
          
            <Button>Agregar al carrito</Button>
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
  )(Producto)