const server = require("express").Router();
const {Orden,Carrito} = require("../models/index.js");

server.post("/agregar",(req,res)=>{
    Orden.create({
         idproducto:req.body.idproducto,
         cantidad:req.body.cantidad,
         total:req.body.total,
         carritoId:req.body.carritoid,
         ordenId:req.body.nuevaorden
    }).then(e=>res.json(console.log(e)))
  

})

module.exports = server;