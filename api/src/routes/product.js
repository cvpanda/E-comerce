const server = require("express").Router();
const { Product, ProductCat,Category } = require("../models/index.js");
const { Op } = require("sequelize");





//Agregar Productos

server.post("/agregar", function (req, res) {
 let b
 b=req.body.idcat
 console.log(b)
 agregarProd(req.body).then((a)=>{
   console.log(a)
   if(b.length===0){
     return res.json(a)
   }
   if(b.length===1){
     return a.addCategory(b)
   }
   if(b.length>1){
    for(let i=0;b.length!==i;i++){
       a.addCategory(b[i])
    }
 }
})
})
       

  
  //.then((result) => {res.json(console.log(result))});
 
 function agregarProd(producto) {
  return Product.create({
    nombreproducto: producto.nombreproducto,
    descripcion:producto.descripcion,
    valor: producto.valor,
    stock: producto.stock,
    imagen: "http://placeimg.com/640/480/tech"
  })
}


//---------------------

//Editar Producto

server.put("/editar", function (req, res) {
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
 
  Product.findAll({
    attributes:["id","nombreproducto","descripcion","stock","valor","imagen"],
    include:{ 
      model:Category,
      attributes:["nombrecategoria"],
    }
  })
  
  .then((result) => {
    res.json(result);
  });
});

//---------------------
server.get("/filter/:id", function (req, res) {
 Product.findByPk().then(result=>res.json(result))
 
});
//Muestra un producto por id

server.get("/:id", function (req, res) {
  
  productId(req.params).then((result) => {
    res.send(result);
  });
});

function productId(idproducto) {
  const producto = Product.findOne({
    where: {
      id: idproducto.id,
    },
  });
  const catProd = ProductCat.findAll({
    where: {
      idproducto: idproducto.id,
    },
  });
  return Promise.all([producto, catProd]);
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

server.delete("/delete", function (req, res) {
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

server.post("/:idproducto/:idcategoria", function (req, res) {
  console.log(req.params)
  addProdCategoria(req.params).then((result) => {
    res.send(result);
  });
});
function addProdCategoria(producto,categoria) {
  return ProductCat.create({
    idproducto: producto,
    idcategoria: categoria,
  });
}
server.get("/filtrar", function (req, res) {
  console.log("llego a la api")
  Product.findAll({
    include:[{ 
         model:Category,
         where:{
            id:req.body.id 
         },
         attributes:["id","nombrecategoria"],
         through:{attributes:[]}
      }],
     }).then(result => res.json(result))
});




module.exports = server;
