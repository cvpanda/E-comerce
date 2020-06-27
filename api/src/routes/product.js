const server = require("express").Router();
const { Product } = require("../models/index.js");

//Test
server.get("/test", function (req, res) {
  console.log('hola soy test')
  res.sendStatus(200);
  
});

//Admin
server.post("/agregar", function (req, res) {
  agregarProd(req.body).then((result) => {
    res.send(result);
  });
});
function agregarProd(producto) {
  return Product.create({
    nombreproducto: producto.nombreproducto,
    descripcion: producto.descripcion,
    valor: producto.valor,
    stock: producto.stock,
  });
}

//---------------------

//Muestra los articulos a todos los usuarios
server.get("/todos", function (req, res) {
  console.log('hola soy test')
  products().then((result) => {
    console.log('hola soy test')
    res.send(result);
  });
});

function products() {
  return Product.findAll();
}

//---------------------

module.exports = server;
