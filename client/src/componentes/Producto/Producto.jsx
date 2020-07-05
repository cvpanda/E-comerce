import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {connect} from 'react-redux'
import styles from './Producto.module.css'
import {Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {agregarAlCarrito} from '../../redux/actions'
// import Categorias from '../Categorias/Categorias'

export function Producto(producto) {
  const {nombreproducto , descripcion , valor,id,categorias,imagen} = producto
  const dispatch  = useDispatch();
  

  function handleClickCarrito(producto){
    dispatch(agregarAlCarrito(producto))
  }
    return ( 
    <div className = {styles.producto}>
            <Link to= {'/productos/'+ id}>
            <h3>{nombreproducto}</h3>
            </Link>
            <Image className = {styles.foto} src={imagen} alt= "FOTO" rounded /> 
        <div>  
            <h5>${valor}</h5>
        </div>
          
            <Button onClick={e => handleClickCarrito(producto)}>Agregar al carrito</Button>
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