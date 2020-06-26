
const initialState = {
    categorias: ["outdoor", "boludeces" , "autos" , "computacion" , "decoracion" , "aventura"],
    seleccionadas:[],
    productos:[
        {
        id:0,
        descripcion:"Tremendo fierrro papa ",
        nombre:"El tutu",
        valor:43242,
        imagen: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy",
        },
        {
        id:1,
        descripcion:"un submarino tremendo",
        nombre:"El pepino de mar",
        valor:5624532,
        imagen:"https://www.armytimes.com/resizer/CShL8vQ3SHRpYArZCOKZz1nUyIQ=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/RJYA5MJKBRAMXOTBACL6QRRC7E.jpg",
        },
        {
        id:2,
        descripcion:"Con esta te vas a los andes",
        nombre:"Bike",
        valor:432,
        imagen:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589313237-gazelle-ultimate-grid-1589313216.jpg",
        }
    ],
    detalle:{
        id:23,
        descripcion:"sakld wqjaklnalkfqajnfikamvcnkla´mwfdklqaw´f cnmakl awqdfwqhjikfolqwjmenaoikd vmqwjdñwq jmklq´qw ",
        nombre:"El tutu ZOOM",
        categorias: ["outdoor", "boludeces" , "autos" , "computacion" , "decoracion" , "aventura"],
        valor:430242,
        imagen: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy",
        },
}

function rootReducer(state = initialState , action){
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

    
   
        
    
    return state
}
export default rootReducer;