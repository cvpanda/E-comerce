const server = require("express").Router();
const {Users,Carrito,Orden} = require("../models/index.js");


server.post("/nuevo",(req,res)=>{
    Users.create({
        nombreusuario:req.body.nombreusuario,
        contraseña:req.body.contraseña,
        email:req.body.email,   
     }).then(user=>{
            Carrito.create({
                   userId:user.id
                           })
}).then(carrito=>res.json(carrito))
})


server.delete("/eliminar",(req,res)=>{
    eliminarUsuario(req.body).then(user=>res.json(user))
})
function eliminarUsuario(user) {
    if (user.id) {
      return Users.destroy({
        where: {
         id: user.id,
        },
      });
    } else {
      return "Esa categoria no existe para este producto";
    }
  }



  server.put("/editar/:id", function (req, res) {
    console.log(req.params)
    console.log(req.body)



    editUsuario(req.params,req.body)
      res.json(console.log(result));

  });
  function editUsuario(user,cambios) {
      const us=Users.id
      if(us){
        return us.update({
        nombreusuario:cambios.nombreusuario,
        contraseña:cambios.contraseña,
       // nombre: user.nombre,
        email: cambios.email,
        //fechanacimiento:  user.fechanacimiento,
        //direccion:user.direccion,
        //cp:  user.cp,
        //ciudad: user.ciudad,
        //foto: user.foto
        })
      }
    }
      server.get("/todos", function (req, res) {
       Users.findAll({
           include:{
               model:Carrito,
               attributes:['cantidad','total'],
               include:{
                model:Orden,
                attributes:['idproducto','cantidad','total']
            },
           },
           attributes:['nombreusuario','email'],
           onDelete: 'CASCADE',
       }).then(users=>res.json(users))
        });


 


module.exports = server;