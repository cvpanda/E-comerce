import React ,{useState} from 'react'
import {connect , useSelector , useDispatch} from 'react-redux'
import { FormCheck, Form} from 'react-bootstrap'
import { filtrarProductos , buscarTodos} from '../../redux/actions';

export function Filtrador ({categorias , filtrarProductos}) {
    var [seleccion , setSeleccion] = useState('')
   var productos = useSelector(store => store.productos)
   const dispatch = useDispatch()

    function handleSubmit(event) {
      
        event.preventDefault();
        filtrarProductos(filter(seleccion))
        console.log("handle submit dispara accion con " + seleccion)
    }
    function filter ( cats){
       var newState = []
      productos.forEach(producto => 

             producto.categories.forEach( (categoria) =>
              {  if(categoria.catpro.categoryId == cats){
                  newState.push(producto)
              } })) 
             
             return newState
     }


    function agregaSeleccion(event){
        if(!seleccion){ 
            setSeleccion([...seleccion , event.target.value])
        } if (seleccion.includes(event.target.value)){
           var borrar = seleccion.indexOf(event.target.value)
            seleccion.splice(borrar , 1)
        } else {
            setSeleccion([...seleccion , event.target.value])
        }
    }

    return(
        <div>
           
            <Form onSubmit = {(e)=> handleSubmit(e)}>
                <h4>Categorias</h4>
                {categorias.map(categoria =>
                <FormCheck type= "checkbox" label = {categoria.nombrecategoria} key={categoria.id} name = {categoria.nombrecategoria}
                value = {parseInt(categoria.id)} onChange= {(event) => agregaSeleccion(event)} />
                )}
                <input type="submit" value="Submit" />  
                
            </Form>
     
        </div>
 

    )
}

function mapStateToProps(state) {
   
    return {
      categorias: state.categorias,
      
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        filtrarProductos: categorias => dispatch(filtrarProductos(categorias)),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filtrador)


