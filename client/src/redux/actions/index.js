import axios from 'axios';

export function buscarTodos() {
    return function(dispatch){
     axios.get(`http://localhost:3001/productos/todos`)
        .then( response => response.data)
        .then(data => {
            dispatch({ type: "TRAER_TODOS", payload: data})
        })
        .catch(()=>(console.log("error")))
    }
   
}

export function filtrarProductos (categorias) {
    // return function(dispatch){
    //     axios.get('http://localhost:3001/productos/´ + categoria)
    //     .then( response => response.data)
    //     .then(data => {
    //         dispatch({ type: "FILTRAR_PRODUCTOS", payload: data})
    //     })
    // }
   
}


export function buscarProductos (nombre) {
    return function(dispatch){
        axios.get('http://localhost:3001/productos/buscar/'+nombre)
         .then( response => response.data)
         .then(nombre => {
        dispatch({ type: "BUSCAR_PRODUCTOS", payload: nombre})
        }).catch(console.log(console.error("error")))
     }
}

export function crearProducto (datos){
    console.log("llego al action")
    return function(dispatch){
        axios.post('http://localhost:3001/productos/agregar',{
                nombreproducto: datos.nombreproducto,
                descripcion:datos.descripcion,
                valor:datos.valor,
                stock:datos.stock
        })
        .then(response =>response.data) 
        .then(data => {
            dispatch({ type: "CREAR_NUEVO_PRODUCTO" , payload: data})
        })
    }
  
        
      
}
export function crearCategoria (payload){
    console.log("llego al action")
    return { type: "CREAR_NUEVA_CATEGORIA" , payload};
    // return function(dispatch){
    //     axios.post('/categoria/new',{
    //         params: {
    //             datos: datos,
    //         }
    //     })
    //     .then(response => response.data)
    //     .then(data => {
    //         dispatch({ type: "CREAR_NUEVA_CATEGORIA" , payload: data})
    //     })
    // }
}

export function prodMod (payload){
    // console.log("llego al action")
    // return { type: "PORD_MOD" , payload};
    // return function(dispatch){
    //     axios.get('/categoria/new',{
    //         params: {
    //             datos: nombre,
    //         }
    //     })
    //     .then(response => response.nombre)
    //     .then(data => {
    //         dispatch({ type: "PORD_MOD" , payload: data})
    //     })
    // }
}

export function agregarCategoriaProducto (producto,categoria){
    return function(dispatch){
        axios.get('http://localhost:3001/'+producto+`/`+categoria)
        .then(response => response.data)
        .then(data => {
            dispatch({ type: "AGREGAR_CATEGORIA_A_PRODUCTO" , payload: data})
        })
    }
}

export function agregarCategoria(nombrecategoria){
    return function(dispatch){
        axios.post('http://localhost:3001/categoria/agregar',{
            nombrecategoria:nombrecategoria
        })
        .then(response => response.data)
        .then(data => {
            dispatch({ type: "AGREGAR_CATEGORIA" , payload: data})
        })
    }
}

export function traerCategorias() {
    return function(dispatch){
     axios.get(`http://localhost:3001/categoria/todos`)
        .then( response => response.data)
        .then(data => {
            dispatch({ type: "TRAER_CATEGORIAS", payload: data})
        })
        .catch(()=>(console.log("error")))
    }
   
}