import axios from 'axios';


export function filtrarProductos (categorias) {
    return function(dispatch){
        axios.get('/productos' , {
            params: {
                categoria: categorias
            }
        })
        .then( response => response.data)
        .then(data => {
            dispatch({ type: "FILTRAR_PRODUCTOS", payload: data})
        })
    }
   
}


export function buscarProductos (nombre) {
    return function(dispatch){
        axios.get('/productos' , {
            params: {
                nombre: nombre
            }
        })
        .then( response => response.data)
        .then(data => {
            dispatch({ type: "BUSCAR_PRODUCTOS", payload: data})
        })
    }
   
}


