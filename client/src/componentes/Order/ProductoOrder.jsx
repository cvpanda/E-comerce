import React , {useState}from 'react'
import {connect , useSelector} from 'react-redux'
import { Navbar , Nav , Form ,Row, Col , Button , Badge, Container} from 'react-bootstrap'


export function ProductoOrder({cantidad , nombreproducto , precio}){
    return(
        <Row>
        <Col>
            <h6>{cantidad}</h6>
        </Col>
        <Col xs={6}>
            <h6>{nombreproducto}</h6>
        </Col>
        <Col>
            <h6>{precio}</h6>
        </Col>
        <Col>
            <h6>{precio * cantidad}</h6>
        </Col>
    </Row>
    )
}


export default connect()(ProductoOrder)