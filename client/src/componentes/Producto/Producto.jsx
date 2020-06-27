import React from 'react'
import {connect} from 'react-redux'
import styles from './Producto.module.css'
import {Button} from 'react-bootstrap'
// import Categorias from '../Categorias/Categorias'

export function Producto({nombre , descripcion , valor,imagen}) {
    
    return ( 
    <div>
        <div>
            <h1>{nombre}</h1>
            {/* <h3>{id}</h3> */}
        </div>
        <div>
        {console.log(imagen,nombre)}
    <img src={imagen} width={300} height={300}/>
            <p>{descripcion}</p>
            <h4>{valor}</h4>
        </div>
            <ul>
                
                {/* <Categorias/> */}
                
            </ul>
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