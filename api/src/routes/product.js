const server = require("express").Router();
const { Product, Category } = require("../models/index.js");
const { Op } = require("sequelize");

//Test
server.get("/test", function (req, res) {
  res.sendStatus(200);
});

//Admin

//Agregar Productos

server.post("/agregar", function (req, res) {
  let b
  b=req.body.id
  agregarProd(req.body).then((a)=>{
  for(let i=0;i<b.length;i++){
    a.addCategory(i)
  }})
 })
   //.then((result) => {res.json(console.log(result))});
  function agregarProd(producto) {
   return Product.create({
     nombreproducto: producto.nombreproducto,
     descripcion:producto.descripcion,
     valor: producto.valor,
     stock: producto.stock,
     include:Category
   })
 }

//---------------------

//Editar Producto

server.put("/editar", function (req, res) {
  console.log("llego el request")
  editProd(req.body).then((result) => {
    res.send(result);
  });
});
function editProd(producto) {
  return Product.update(
    {
      nombreproducto: producto.nombreproducto,
      descripcion: producto.descripcion,
      valor: producto.valor,
      stock: producto.stock,
    },
    {
      where: {
        id: producto.id,
      },
    }
  );
}

//---------------------

//Eliminar Productos

server.delete("/:idproducto", function (req, res) {
  delProduct(req.params).then(() => {
    res.sendStatus(200);
  });
});

function delProduct(catprod) {
  if (catprod.idproducto) {
    return Product.destroy({
      where: {
        id: catprod.idproducto,
      },
    });
  } else {
    return "Esa categoria no existe para este producto";
  }
}

//---------------------

//Muestra los articulos a todos los usuarios

server.get("/todos", function (req, res,) {
 
  Product.findAll().then((result) => {
    res.json(result);
  });
});

function products() {
  return Product.findAll();
}

//---------------------

//Muestra un producto por id

server.get("/:id", function (req, res) {
  
  productId(req.params).then((result) => {
    res.send(result);
  });
});

function productId(idproducto) {
  const producto = Product.findAll({
    where: {
      id: idproducto.id,
    },
  });
  return producto;
}

//---------------------

//Buscar producto por keyword

server.get("/buscar/:palabra", function (req, res) {
  searchProduct(req.params).then((result) => {
    res.send(result);
  });
});

function searchProduct(key) {
  return Product.findAll({
    where: {
      [Op.or]: [
        { nombreproducto: { [Op.iLike]: `%${key.palabra}%` } },
        { descripcion: { [Op.iLike]: `%${key.palabra}%` } },
      ],
    },
  });
}

//---------------------

//Quitar categoria a un producto

server.delete("/:idproducto/:idcategoria", function (req, res) {
  delProdCategoria(req.params).then(() => {
    res.sendStatus(200);
  });
});

function delProdCategoria(catprod) {
  if (catprod.idcategoria) {
    return ProductCat.destroy({
      where: {
        idcategoria: catprod.idcategoria,
      },
    });
  } else {
    return "Esa categoria no existe para este producto";
  }
}

//---------------------

//Agregar categoria nueva a producto

server.post("/:producto/:categoria", function (req, res) {
  addProdCategoria(req.params).then((result) => {
    res.send(result);
  });
});
function addProdCategoria(catprod) {
  return ProductCat.create({
    idproducto: catprod.idproducto,
    idcategoria: catprod.idnueva,
  });
}

server.post("/agregar", function (req, res) {
 let b
 b=req.body.id
 agregarProd(req.body).then((a)=>{
 for(let i=0;i<b.length;i++){
   a.addCategory(i)
 }})
})
  //.then((result) => {res.json(console.log(result))});
 function agregarProd(producto) {
  return Product.create({
    nombreproducto: producto.nombreproducto,
    descripcion:producto.descripcion,
    valor: producto.valor,
    stock: producto.stock,
    include:Category
  })
}

module.exports = server;
