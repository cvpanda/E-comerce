import React from 'react'
import {connect} from 'react-redux'
import {Container , Row , Col} from 'react-bootstrap'
import Card from './home.js'

export function product ({productos}) {

    return(
        <Container>
            <Row>
                <Col sm={8}>
                    {productos.map(c => <Card 
                    id={c.id}
                    descripcion={c.descripcion} 
                    nombre={c.nombre}
                    valor={c.valor}
                    stock={c.stock}
                    categoria={c.categoria}/>
                    )}
                </Col>
            </Row>
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
  )(product)