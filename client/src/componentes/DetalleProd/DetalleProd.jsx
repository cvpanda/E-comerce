import React from 'react'
import {connect} from 'react-redux'
import styles from './DetalleProd.module.css'
import {Button, Image , Col , Row , Container} from 'react-bootstrap'

export function DetalleProd ({nombre , descripcion , valor,id,categorias,imagen}) {
    return (
        <div>
            <Col>
                <h2>{nombre}</h2>
                <img src={imagen} alt=""/>
            </Col>
            <Col>
                <Row>
                    {categorias.map(categoria => 
                        <span>{categoria}</span>
                    )}
                </Row>
                
                <p>{descripcion}</p>
                <span>{id}</span>
                <h5>{valor}</h5>
                <Button>Agergar al Carrito</Button>
            </Col>

        </div>
    )
}

function mapStateToProps(state) {
   
    return {
      detalle: state.detalle,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(DetalleProd)