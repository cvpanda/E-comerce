import React from 'react'
import {connect} from 'react-redux'
import styles from './Producto.module.css'
import {Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Categorias from '../Categorias/Categorias'

export function Producto({nombre , descripcion , valor,id,categorias,imagen}) {
    return ( 
    <div className = {styles.producto}>
            <Link to= {'/productos/'+ id}>
            <h3>{nombre}</h3>
            </Link>
            <Image className = {styles.foto} src={imagen} alt= "FOTO" rounded /> 
        <div>  
            <h5>${valor}</h5>
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