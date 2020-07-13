
const initialState = {

    categorias:[{}],
    usuario:{
        nombreusuario: "MattCasa",
        contraseña: "blablalba" ,

    },
    seleccionadas:[],
    productos:[ ],
    detalle:{ },
    buscado:"",
    prodid:{},
    carrito:[],  
    subtotales:[],
    orders:[
        {
            idcompra: 24,
            productos: [
               { id:1,
                nombreproducto:"Nuevo producto",
                descripcion:"primero",
                valor:324432,
                stock:23,
                cantidad: 2
            },
               { id:2,
                nombreproducto:"Locomotora",
                descripcion:"segundo",
                valor:231321,
                stock:23,
                cantidad: 4
            }
            ]
        },
        {
            idcompra: 54,
            productos: [
               { id:1,
                nombreproducto:"orden 2 producto",
                descripcion:"primero",
                valor:324432,
                stock:23,
                cantidad: 2
            },
               { id:324,
                nombreproducto:"Loco orden 2",
                descripcion:"segundo",
                valor:231321,
                stock:23,
                cantidad: 4
            }
            ]
        }
    ],
}

function incrementar(cantidad){
    return cantidad+1
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
          productos: action.categorias
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
    if(action.type ===  "AGREGAR_AL_CARRITO"){
        if(state.carrito.length == 0){
            return{
                ...state, 
                    carrito: state.carrito.concat(action.producto)
        }} else {
        var newstate =  state.carrito
        var index
        var producto = action.producto  
        function chequear() {
            for (var i = 0; i < newstate.length; i++) {
            if(newstate[i].id === producto.id){
                return true
            }   
        }}
        if(chequear()){
           for (let i = 0; i < newstate.length; i++) {
               var valoractual = newstate[i].id
               if(newstate[i].id == producto.id){
                    newstate.splice(i,1 ,producto)
                    return{
                        ...state,
                        carrito: newstate
                    }
                }
           }
        } else {
        return{
            ...state, 
                carrito: state.carrito.concat(action.producto)
        }}}
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
    if(action.type === "CONFIRMAR_COMPRA"){
        
        return{
            ...state, 
                carrito: [],
                subtotales: [],
        
        }
    }
    if(action.type ===  "CREAR_USUARIO"){
        console.log("llega al reducer con " + action.payload)
        return{
            ...state, 
                usuario: action.payload,
                productos: action.payload
        
        }
    }
    if(action.type ===  "TRAER_USUARIOS"){
        return{
            ...state, 
                usuario: action.payload,
              
        
        }
    }

    if(action.type === "LOG_OUT"){
        return {
            ...state,
            usuario: {},
        }
    }

    
    return state
}
export default rootReducer;