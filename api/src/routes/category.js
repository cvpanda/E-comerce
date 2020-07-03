const server = require("express").Router();
const { Category } = require("../models/index.js");

//Admin

//Agregar Categoria

server.get("/todos", function (req, res,) {
 
  Category.findAll().then((result) => {
    res.json(result);
  });
});


server.post("/agregar", function (req, res) {
  agregarCat(req.body).then((result) => {
    res.send(result);
  });
});
function agregarCat(categoria) {
  return Category.create({
    nombrecategoria: categoria.nombrecategoria,
  });
}
//----------------------------

//Editar Categoria

server.put("/editar", function (req, res) {
  editCat(req.body).then((result) => {
    res.send(result);
  });
});
function editCat(categoria) {
  return Category.update(
    {
      id: categoria.id,
      nombrecategoria: categoria.nombrecategoria,
    },
    {
      where: {
        id: categoria.id,
      },
    }
  );
}

//----------------------------

// Deletear Categoria

server.delete("/:id", function (req, res) {
  delCat(req.params).then(() => {
    res.sendStatus(200);
  });
});

function delCat(cat) {
  if (cat.id) {
    return Category.destroy({
      where: {
        id: cat.id,
      },
    });
  } else {
    return "Esa categoria no existe para este producto";
  }
}

module.exports = server;
