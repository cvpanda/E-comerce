import React from 'react'
import {connect} from 'react-redux'
import styles from './DetalleProd.module.css'
import {Button, Image , Col , Row , Container} from 'react-bootstrap'

export function DetalleProd ({detalle}) {
    const {nombre, descripcion , imagen , id ,valor , categorias} = detalle;
    return (
        <div className = {styles.contenedor}>
            <Row>

                <Col sm={8}>
                
                    <h2>{nombre}</h2>
                    <img src={imagen} alt="" className = {styles.img}/>
                </Col>
                <Col sm={4} className = {styles.detalles}>
                   <div>

                    <h4 className={styles.titulos}>Detalles:</h4>
                    <p className={styles.titulos}>{descripcion}</p>
                    <span className={styles.titulos}>codigo producto:{id}</span>
                    <h5 className={styles.titulos}>${valor}</h5>
                    <Button className={styles.titulos}>Agergar al Carrito</Button>
                   </div>
                </Col>

            </Row>
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