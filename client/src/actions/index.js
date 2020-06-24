export function agregarProducto (payload) {
    return { type: "SET_PRODUCTO", payload };
}

export const agregarAlCarro =(payload)=> {
    return { type: "SET_AGREGAR_CARRO" , payload};
}

export const comprar =(payload)=> {
    return { type: "SET_COMPRA" , payload};
}



