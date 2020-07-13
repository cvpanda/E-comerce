import React , {useState}from 'react'
import {connect , useSelector , useDispatch} from 'react-redux'
import { Dropdown , Nav , Form , FormControl , Button , Badge , Modal , Col, Container } from 'react-bootstrap'
import { buscarProductos , buscarTodos , traerUsuarios ,logOut } from '../../redux/actions';
import { Link } from 'react-router-dom'

export function UserRegister(){
    return(
        <Container>
            <h1>Formulario de Registro</h1>
        </Container>
    )
}