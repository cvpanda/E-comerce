
const initialState = {
    categorias:[{}],
    seleccionadas:[],
    productos:[ ],
    detalle:{ },
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
    if(action.type === "CREAR_NUEVO_PRODUCTO") {
        return{
            ...state,
            productos : action.datos,     //deberia recibir todos los productos de la DB
               
 }
      
    }
    if(action.type === "CREAR_NUEVA_CATEGORIA") {
        return{
            ...state,
            categorias : state.categorias.concat(action.payload),        //deberia recibir todos los productos de la DB
            
        }
    }
    if(action.type === "PORD_MOD") {
        return{
            ...state,
            detalle : action.payload,        
            
        }
    }

    if(action.type === "AGREGAR_CATEGORIA") {
        return{
            ...state,
            categorias : action.payload,        
            
        }
    } 
    
    if(action.type === "TRAER_CATEGORIAS") {
        return{
            ...state,
            categorias : action.payload,        
            
        }
    } 
    
    return state
}
export default rootReducer;