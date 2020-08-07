const server = require("express").Router();
const { Product, ProductCat,Category, Review } = require("../models/index.js");


server.get("/:idproducto" , function (req,res){
    console.log("req params id =>"+req.params.idproducto)
    getProdReview(req.params.idproducto).then(result => {
        res.json(result)
    })
})

function getProdReview(id){
    if(id){
   return  Review.findOne({
            where:{
                productId : id,
            }
        })
    } else { return "error de id"}
}

server.put("/editar" , function (req,res){
    Review.update(
        {
            raiting: req.body.raiting,
            comentario: req.body.comentario,
        },{
            where: {
                id:req.body.id
            }
        }
    ).then(Review.findOne({
        where:{
            id:req.body.id,
        }
    })).then(result => res.json(result))
})

server.post("/agregar" , function (req,res){
    Review.create({
        raiting: req.body.raiting,
        comentario: req.body.comentario,
        productId: req.body.id
    }).then(result => res.json(result))
})


module.exports = server;