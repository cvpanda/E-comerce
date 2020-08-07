import React , {useState}from 'react'
import {connect , useSelector} from 'react-redux'
import { Navbar , Nav , Form ,Row, Col , Button , Badge, Container} from 'react-bootstrap'
import styles from './Order.module.css'
import { ProductoOrder } from './ProductoOrder'

export function Order (ordenes) {
    
    
    return(
        <Container className={styles.container} key = {ordenes.id}>
            <h4>Orden Nº: {ordenes.id}</h4>
            <Row>  
                <Col>
                    <h5>Cantidad</h5>
                </Col>
                <Col xs={6}>
                    <h5>Producto</h5>
                </Col>
                <Col>
                    <h5>Precio</h5>
                </Col>
                <Col>
                    <h5>Subtotal</h5>
                </Col>
            </Row>
           { ordenes.productos.map(prod => <ProductoOrder
           cantidad = {prod.cantidad}
           nombreproducto = {prod.nombreproducto}
           precio = {prod.valor} 
           key = {prod.id}
           />)}
        </Container>
    )
}

export default connect()(Order)