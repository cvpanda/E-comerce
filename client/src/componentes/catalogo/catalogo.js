import React from 'react'
import {connect} from 'react-redux'
import styles from './Catalogo.module.css'
import Producto from '../Productos/Product.js'
import {Container , Row , Col} from 'react-bootstrap'
import Filtrador from '../Filtrado/Filtrado.js'

export function Catalogo ({productos}) {
    return (
        <Container>
          <Col>
            <Filtrador/>
          </Col>
        <Col>
          {productos.map((producto) => <Producto
            nombre = {producto.nombre} 
            descripcion = {producto.descripcion}
            valor = {producto.valor}
            id = {producto.id}
            imagen = {producto.imagenes}
            />
          )}
        </Col>
        </Container>
        )
}
function mapStateToProps(state) {
   
    return {
      productos: state.productos,
      
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