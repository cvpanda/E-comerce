import React,{Component} from 'react'
import {connect} from 'react-redux'
import styles from './Catalogo.module.css'
import Producto from '../Producto/Producto'
import {Container , Row , Col} from 'react-bootstrap'
import Filtrador from '../Filtrador/Filtrador'
//import Axios from 'axios'
import {buscarTodos,traerCategorias} from '../../redux/actions/index.js'
//import { render } from '../../../../api/src/app'

export class Catalogo extends Component {
  // constructor(props){
  //      super(props)
  // }
    
componentDidMount(){
this.props.buscarTodos()
this.props.traerCategorias()
}



 render() {
       return (
      
        <Container className = {styles.container}>
          <Row>
            <Col sm={4}>
              <Filtrador/>
            </Col>
            <Col sm={8} className = {styles.productos}>
                {this.props.productos.map((producto) => <Producto 
                  key = {producto.id}
                  nombreproducto = {producto.nombreproducto} 
                  descripcion = {producto.descripcion}
                  valor = {producto.valor}
                  id = {producto.id}
                  imagen = {producto.imagen}
                  />
                  )}
              
            </Col>
          </Row>
        </Container>
        )
     }
}  

function mapStateToProps(state) {
   
    return {
      productos: state.productos,
      categorias: state.categorias
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      buscarTodos:(data)=>dispatch(buscarTodos(data)),
      traerCategorias:(data)=>dispatch(traerCategorias(data))
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Catalogo)