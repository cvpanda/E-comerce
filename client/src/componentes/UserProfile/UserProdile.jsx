import React , {useState}from 'react'
import {connect , useSelector , useDispatch} from 'react-redux'
import { Navbar , Nav , Form , FormControl , Button , Badge, Container} from 'react-bootstrap'
import { buscarProductos , buscarTodos , traerUsuarios } from '../../redux/actions';
import LogIn from '../LogIn/LogIn'
import { Link } from 'react-router-dom'

export function UserProfile() {
    return(
        <Container>
            <h1>Perfil del usuario</h1>
        </Container>
    )
}