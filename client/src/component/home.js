import React from 'react'
import {connect} from 'react-redux'


export function Card({id,descripcion,nombre,stock,valor,categoria}) {
    
    return (
                <div>
                    <h4> {nombre} </h4>
                    <div>
                        <p>id: {id}</p>
                        <p>descripcion: {descripcion}</p>
                        <p>Stock: {stock}</p>
                        <p>Categoria: ${categoria}</p>
                        <p>Valor: ${valor}</p>
                    </div>
                </div>
        )
}

function mapStateToProps(state) {
   
    return {
      productos: state.productos,
     
      
    };
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
     
    };
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(Card)