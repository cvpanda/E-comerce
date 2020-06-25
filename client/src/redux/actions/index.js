export function getProducto (productos) {
    return { type: "GET_PRODUCTO", productos };
}

export const buscarProductos =(productos)=> {
    return { type: "GET_BUSCAR_PRODUCTOS" , productos};
}


export const fetchProductos = categorias => dispatch =>{
    const url =`/api/productos${categorias ? `?categoria=${categoria}`:''}`;
    return axios
       .get(url)
       .then(res=>res.data)
       .then(productos=>dispatch(getProducto(productos)))
}

export const fetchBuscarProductos = () => dispatch =>
axios
   .get('/api/productos')
   .then(res => res.data)
   .then(productos=>dispatch(buscarProductos(productos)))


