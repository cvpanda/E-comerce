import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {connect} from 'react-redux'
import styles from './Producto.module.css'
import {Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {agregarAlCarrito} from '../../redux/actions'
// import Categorias from '../Categorias/Categorias'

export function Producto(producto) {
  const carrito = useSelector(store => store.carrito);
  const {nombreproducto , descripcion , valor,id,categorias,imagen ,cantidad} = producto
  const dispatch  = useDispatch();
  
  function chequear(source , target) {
    for (var i = 0; i < source.length; i++) {
    if(source[i].id === target.id){
        return true
    }}}

  function handleClickCarrito(producto){
    console.log("cantidad de prod "+producto.cantidad)
    if(carrito.length == 0){
      dispatch(agregarAlCarrito(producto))
    }
    if(chequear(carrito,producto)){
      var prod = Object.assign({}, producto)
      prod.cantidad += 1
      console.log("cantidad de prod aumentado "+producto.cantidad)
      dispatch(agregarAlCarrito(prod))
    }else{
      dispatch(agregarAlCarrito(producto))
    }
  }
    return ( 
    <div className = {styles.producto}>
            <Link to= {'/productos/'+ id} onClick={e => alert("aca deberia mandar el dispatch para traer reviews")}>
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