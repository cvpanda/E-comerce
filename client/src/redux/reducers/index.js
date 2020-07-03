
const initialState = {
    categorias:[{}],
    seleccionadas:[],
    productos:[ ],
    detalle:{ },
    buscado:"",
    prodid:{},
    carrito:[
        {
        id:1,
        nombreproducto:"Nuevo producto",
        descripcion:"primero",
        valor:22222,
        stock:3,
        cantidad: 1
        },
        {
        id:2,
        nombreproducto:"gweqgwegewo",
        descripcion:"segundo",
        valor:111,
        stock:6,
        cantidad: 1
        },
        {
        id:3,
        nombreproducto:"sdsadasdas",
        descripcion:"tercero",
        valor:342432,
        stock:10,
        cantidad: 2
        }
    ],  

subtotales:[],
}

function rootReducer(state = initialState , action){
    

    if (action.type === "TRAER_TODOS") {
        return{
            ...state,
            productos: action.payload,
        }
      }

    if (action.type === "FILTRAR_PRODUCTOS") {
      return{
          ...state,
          productos: action.payload,
      }
    }
    if (action.type === "BUSCAR_PRODUCTOS") {
      return{
          ...state,
          productos: action.payload,
      }
    }
    if (action.type === "BUSCAR_PRODUCTOS_EDITAR") {
        console.log("buscado llego a reducer")
      return{
          ...state,
          buscado: action.payload,
      }
    }
    if(action.type === "CREAR_NUEVO_PRODUCTO") {
        return{
            ...state,
            productos : action.datos,     //deberia recibir todos los productos de la DB
               
 }
      
    }
    if(action.type === "CREAR_NUEVA_CATEGORIA") {
        return{
            ...state,
            categorias : action.payload,        //deberia recibir todos los productos de la DB
            
        }
    }
    if(action.type === "EDITAR_PRODUCTO") {
        return{
            ...state,      
            
        }
    }

    if(action.type === "AGREGAR_CATEGORIA") {
        console.log("el reducer recibe => " +action.payload)
        return{
            ...state,
            categorias : state.categorias.concat(action.payload),        
            
        }
    } 
    
    if(action.type === "TRAER_CATEGORIAS") {
        return{
            ...state,
            categorias : action.payload,        
            
        }
    } 
    if(action.type === "BUSCAR_PRODUCTOS_ID") {
        return{
            ...state,
            prodid : action.payload,        
            
        }
    } 

    if(action.type === "ELIMINAR_DEL_CARRITO"){
        
        return{
            ...state, 
                carrito: state.carrito.filter(producto => producto.id !== action.payload)
        
        }
    }
    if(action.type === "SUBTOTAL_CARRITO"){
        const {ide , total} = action.payload
        if(state.subtotales.find(element => element.id == ide)){ 
            var indice = state.subtotales.findIndex(element => element.id === ide);
            var nuevo = {id: ide , total: total}
        
            return{
                ...state,
                
                subtotales: [
                    ...state.subtotales,
                    
                    state.subtotales[indice].total =  total
                ]
            }
            
        }else{
            return{
                ...state,
                subtotales:[
                    ...state.subtotales,
                    {
                    id : ide,
                    total : total 
                }]
            }
        }
        
    }

    
    return state
}
export default rootReducer;