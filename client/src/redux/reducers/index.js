
const initialState = {
    categorias: ["outdoor", "boludeces" , "autos" , "computacion" , "decoracion" , "aventura"],
    productos:[
        {
        id:0,
        descripcion:"Tremendo fierrro papa ",
        nombre:"El tutu",
        valor:43242,
        imagen: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
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
    ]
}

function rootReducer(state = initialState , action){
    if (action.type === "PROBANDO_SI_FUNCA") {
      
        }
    
   
        
    
    return state
}
export default rootReducer;