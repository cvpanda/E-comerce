import React ,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Button,Col , Row, Container} from 'react-bootstrap'
import {buscarTodos , buscarProductoId ,confirmarCompra} from '../../redux/actions'
import { useEffect } from 'react'
import styles from './Carrito.module.css'
import ProdCarrito from '../ProdCarrito/ProdCarrito'

export function Carrito() {
    const productos = useSelector(store => store.carrito);
    const subtotales = useSelector(store => store.subtotales);
    const dispatch = useDispatch();

    var validos = subtotales.filter(element => element.id)
    var suma = 0
    function sumatotal(){
       
       
        console.log("los validos =>"+ validos)
        validos.forEach(element => {
            suma +=element.total
        }); return suma
    }

    function handleCompra(validos , suma){
        dispatch(confirmarCompra(validos , suma))
    }
    return(
        <Container className={styles.container}>
            <h2>Carrito</h2>
            <h4>Productos:</h4>
            {productos.map(prod => <ProdCarrito
            nombreproducto = {prod.nombreproducto}
            valor = {prod.valor}
            cantidad= {prod.cantidad}
            id = {prod.id} 
            stock = {prod.stock}
            
            />)}
            <h6>Total: {sumatotal()}</h6>
            <Button onClick={e => handleCompra(validos , suma)}>Comprar</Button>
        </Container>
    )

}

export default Carrito