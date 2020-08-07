import React , {useState, useEffect, useLayoutEffect}from 'react'
    import {connect} from 'react-redux'
    import {Form , Button , Col} from 'react-bootstrap'
    import {crearProducto , agregarCategoria, prodMod, buscarProductos,traerCategorias} from '../../redux/actions'
    import styles from './ProductManager.module.css'
    import Cat from '../Cat/Cat'


export function Categorias ({categoria}) {
    return(
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Categorias</Form.Label>
      <Form.Group  >
          
      {props.categorias.map(e =>  <Form.Check inline key= {e.id} type="checkbox" 
      label = {e.nombrecategoria} name = {e.nombrecategoria} value = {e.nombrecategoria}
      onChange= {(event) => agregaSeleccion(event)} />
      )}
      <div className = {styles.props}>
          <Form.Label>Seleccionadas</Form.Label>
          <Form.Group>
          {seleccion && seleccion.map(e => 
          <Cat key={e} categorias = {e}/>)}
          </Form.Group>
      </div>
      </Form.Group >
  </Form.Group>
    )
}

function mapStateToProps(state) {
    
  return {
  categorias: state.categorias,
  seleccionadas: state.seleccionadas,
  detalle: state.detalle,
  productos: state.productos

  };
}

function mapDispatchToProps(dispatch) {
  return {
      crearProducto: (datos) => dispatch(crearProducto(datos)),
      agregarCategoria: (datos) => dispatch(agregarCategoria(datos)),
      prodMod: (datos) => dispatch(prodMod(datos)),
      buscarProductos: (datos) => dispatch(buscarProductos(datos))
  };
}     

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categorias)