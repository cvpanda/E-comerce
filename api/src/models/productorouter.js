const { Categorias, Productos } = require('../models');
const Product = require('./Product');
const router = require('express').Router();


router.get('./', function(req, res, next){
      const categoria= req.query.categoria;
      let find

      if (categoria !== undefined){
          find={
             include:[
              {model:Categorias, where: {id:categoria}},   
             ]
          };
      }else {
          find = {
              include :[{model:Reviews, as: 'reviews'},{model:Categorias}]
          }
      }
   Productos.findAll(find).then(Product=>{
       res.send(Product);
   })
  })
  
  module.exports = {
    categorias: require('./categoria'),
    wiki: require('./wiki'),
    index: router,
  };
