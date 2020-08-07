const server = require("express").Router();
const {Carrito,Orden} = require("../models/index.js");

server.get("/ver",(req,res)=>{
    Carrito.findAll({
        include:{
            model:Orden,
            attributes:['idproducto','cantidad','total']
        },
    }).then(users=>res.json(users))
    
})


module.exports = server;
