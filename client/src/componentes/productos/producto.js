import React from 'react'
import {connect} from 'react-redux'
//import styles from './Producto.module.css'
import {Button} from 'react-bootstrap'
 import Categorias from '../categoria/categoria.js'

export function Producto({nombre , descripcion , valor,id,categorias,imagen}) {
    return ( 
    <div>
        <div>
            <h1>{nombre}</h1>
            {/* <h3>{id}</h3> */}
        </div>
        <div>
            <img src={imagen} alt=""/>
            <p>{descripcion}</p>
            <h4>{valor}</h4>
        </div>
            <ul>
                
                { <Categorias/> }
                
            </ul>
            <Button>Agregar al carrito</Button>
    </div>
    

    )
}

function mapStateToProps(state) {
   
    return {
      productos: state.productos,
      
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