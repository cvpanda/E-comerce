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
     
//    return function(dispatch){
//        axios.get('http://localhost:3001/productos/filtrar',{
//            body:{

//                 categorias 
//            }
//        }).then(response => response.data)
//        .then(productos => {
//            dispatch({type: "FILTRAR_PRODUCTOS" , payload: productos})
//        })
//    }
            
            return{  type: "FILTRAR_PRODUCTOS" , categorias }
   
}


export function buscarProductos (nombre) {
    console.log(nombre)
    return function(dispatch){
        axios.get('http://localhost:3001/productos/buscar/'+nombre)
         .then( response => response.data)
         .then(nombre => {
        dispatch({ type: "BUSCAR_PRODUCTOS", payload: nombre})
        }).catch(console.log(console.error("error")))
     }
}

export function buscarProductoEditar (nombre) {
    console.log("llego al action con"+nombre)
    return function(dispatch){
        axios.get('http://localhost:3001/productos/buscar/'+nombre)
         .then( response => response.data)
         .then(nombre => {
        dispatch({ type: "BUSCAR_PRODUCTOS_EDITAR", payload: nombre})
        }).catch(console.log(console.error("error")))
     }
}

export function crearProducto (datos){
    console.log("llego al action con => "+datos.seleccion)
    return function(dispatch){
        axios.post('http://localhost:3001/productos/agregar',{
                nombreproducto: datos.nombreproducto,
                descripcion:datos.descripcion,
                valor:datos.valor,
                stock:datos.stock,
                idcat: datos.seleccion
        })
        .then(response =>response.data) 
        .then(data => {
            dispatch({ type: "CREAR_NUEVO_PRODUCTO" , payload: data})
        })
    }
  
        
      
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
    console.log("action manda =>"+nombrecategoria)
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
export function eliminarProducto(id) {
    console.log("esta mandando este id"+id)
    return function(dispatch){
        axios.delete('http://localhost:3001/productos/'+id)
         .then(
        dispatch({ type: "ELIMINAR_PRODUCTO"})
        ).catch(console.log(console.error("error")))
     }
}

export function editarProducto(datos){
    return function(dispatch){
        console.log("action de editar producto")
        axios.put('http://localhost:3001/productos/editar',{
                nombreproducto: datos.nombreproducto,
                descripcion:datos.descripcion,
                valor:datos.valor,
                stock:datos.stock,
                id:datos.id
        })
        .then( dispatch({ type: "EDITAR_PRODUCTO"})
        ).catch(()=>(console.log("error")))
    }  
}

export function buscarProductoId (id) {
    console.log("llego al action con"+id)
    return function(dispatch){
        axios.get('http://localhost:3001/productos/'+id)
         .then( response => response.data)
         .then(data => {
        dispatch({ type: "BUSCAR_PRODUCTOS_ID", payload: data})
        }).catch(console.log(console.error("error")))
     }
}

export function eliminarDelCarrito (payload) {
    
    return{ type: "ELIMINAR_DEL_CARRITO" , payload}
}

export function sendSubtotal(total , ide){
    return{ 
        type: "SUBTOTAL_CARRITO" , 
        payload: {
            total:total,
            ide:ide
        }}
}

export function confirmarCompra(datos){
    // return function(dispatch){
    //     axios.post('http://localhost:3001/carrito/agregar',{
    //         producto: datos.validos,
    //         total: datos.suma
    //     })
    //     .then(response => response.data)
    //     .then(data => {
    //         dispatch({ type: "CONFIRMAR_COMPRA" , payload: data})
    //     })
    // }
    return{ type: "CONFIRMAR_COMPRA" }
}

export function agregarAlCarrito(producto){
    //  return function(dispatch){
    //     axios.post('http://localhost:3001/carrito/agregar/producto',{
    //        producto
    //     })
    //     .then(response => response.data)
    //     .then(data => {
    //         dispatch({ type: "AGREGAR_AL_CARRITO" , payload: data})
    //     })
    // }
    return{ type: "AGREGAR_AL_CARRITO", producto }
}

export function registrarUsuario(usuario){
    console.log("llega al action con datos =>" + usuario)
    return function(dispatch){
        axios.post('http://localhost:3001/usuario/nuevo',{
            nombreusuario:usuario.nombre,
            contraseña:usuario.password,
            email:usuario.mail  
        })
        .then(response => response.data)
        .then(data => {
            dispatch({ type: "CREAR_USUARIO" , payload: data})
        })
    }
}

export function traerUsuarios () {
    console.log("llego al action traer usuarios")
    return function(dispatch){
        axios.get('http://localhost:3001/usuario/todos')
         .then( response => response.data)
         .then(data => {
        dispatch({ type: "TRAER_USUARIOS", payload: data})
        }).catch(console.log(console.error("error")))
     }
}

export function logOut(){
    return{ type: "LOG_OUT" }
}