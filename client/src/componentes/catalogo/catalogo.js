import React from 'react'
import {connect} from 'react-redux'
//import styles from './Catalogo.module.css'
import Producto from '../productos/producto.js'
import {Container , Col} from 'react-bootstrap'
//import Filtrador from '../Filtrado/Filtrado.js'

export function Catalogo (props) {
    return (
        <Container>
        <Col>
          {props.map(p => <Producto
            nombre = {p.nombre} 
            descripcion = {p.descripcion}
            valor = {p.valor}
            id = {p.id}
            imagen = {p.imagenes}
            />
          )}
        </Col>
        </Container>
        )
}
function mapStateToProps(state) {
   
    return {
      producto: state.productos,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Catalogo)