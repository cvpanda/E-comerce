import React , {useState}from 'react'
import {connect , useSelector} from 'react-redux'
import { Navbar , Nav , Form ,Row, Col , Button , Badge, Container} from 'react-bootstrap'
import { Order } from './Order'

export function Ordenes(){
    const orders = useSelector(store => store.orders)
return(
    <Container>
        {orders.map(orden => 
            <Order id = {orden.idcompra} 
            productos= {orden.productos}
            />
            )}
    </Container>
)
}

export default connect()(Ordenes)