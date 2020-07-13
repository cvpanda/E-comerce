const server = require("express").Router();
const {Users,Carrito,Orden} = require("../models/index.js");
const session=require("express-session");
const bcrypt = require("bcrypt")
const configPassport = require("./pass");
const passport = require("passport");


configPassport(
  passport,
email => users.findAll(user => user.email === email),
id => users.findAll(user => user.id === id)
)
server.use(session,({
  secret:"mamama",
  resave:true,
  saveUninitialized:true

})) 
server.use(configPassport())
server.use(passport.session())

server.get("/",(req,res)=>{


  
})
server.get("/login",(req,res)=>{passport.authenticate("local")
  res.send("logiado")
})

server.post("/nuevo",async (req,res)=>{
    const contraseñahash = await  bcrypt.hash(req.body.contraseña,10)
    console.log(contraseñahash)
    Users.create({
        nombreusuario:req.body.nombreusuario,
        contraseña:contraseñahash,
        email:req.body.email,   
     }).then(user=>{
       
      
      res.json(user)
      return user
    
    
    })
     .then(user=>{
            Carrito.create({
                   userId:user.id
                           })
}).then(user=>{
  console.log(user)
    })
})


server.delete("/eliminar",(req,res)=>{
    eliminarUsuario(req.body).then(user=>res.json(console.log(user)))
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



  server.put("/editar", function (req, res) {
    
    Users.findOne({
      where:{
        id:req.body.id
      }
    }).then(user=>{res.json(user)
    return user
    }).then(user=>
     user.update({
        nombreusuario:req.body.nombreusuario,       
        contraseña:req.body.contraseña,
        email:req.body.email,
        fechanacimiento:  req.body.fechanacimiento,
        direccion:req.body.direccion,
        cp:  req.body.cp,
        ciudad: req.body.ciudad,
        pais:req.body.pais,
        nombre: req.body.nombre,
        foto: req.body.foto
    })).then(result=>{res.json(result)
  return result
  })
  })   

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
           attributes:["id",'nombreusuario','email'],
           onDelete: 'CASCADE',
       }).then(users=>res.json(users))
        });


 


module.exports = server;