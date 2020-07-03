import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from './DetalleProd.module.css'
import {Button,Col , Row} from 'react-bootstrap'
import {buscarTodos , buscarProductoId} from '../../redux/actions'
import { useEffect } from 'react'

export function DetalleProd (props) {
    const productos = useSelector(store => store.prodid[0]);
    const dispatch  = useDispatch();

    useEffect(() => { dispatch(buscarProductoId(ide))},[])

    const ide = props.match.params.id
    
    function producto(){
     
        return productos;
    }
    console.log("id =>" + ide)
    console.log("productos =>"+ productos)
    console.log("funcion =>"+producto())
    
    
    
        console.log("con props =>"+ productos)
     
        
    
    
    // const  {nombreproducto, descripcion, valor , stock } = this.props.productos

    if(productos){
        return  (
            <div className = {styles.contenedor}>
                <Row>
    
                    <Col sm={8}>
                    
                        <h2>{producto().nombreproducto}</h2>
                        <img src="" alt="" className = {styles.img}/>
                    </Col>
                    <Col sm={4} className = {styles.detalles}>
                       <div>
    
                        <h4 className={styles.titulos}>Detalles:</h4>
                        <p className={styles.titulos}>{producto().descripcion}</p>
                        <span className={styles.titulos}>codigo producto:{producto().id}</span>
                        <h5 className={styles.titulos}>${producto().valor}</h5>
                        <Button onClick={e => console.log(props.productos)} className={styles.titulos}>Agergar al Carrito</Button>
                       </div>
                    </Col>
    
                </Row>
            </div>
        )
    } else {
        return null;
    }
}



  export default DetalleProd