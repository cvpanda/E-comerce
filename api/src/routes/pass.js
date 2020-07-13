const localStrategy = require("passport-local")
const bcrypt = require("bcrypt")
const server = require("./users")
const passport = require("passport")
const { serializeUser } = require("passport")
const e = require("express")


function configPassport(passport,getUserByEmail,getUserById){
    const autenticacionUsuario= async (email,password,done)=>{
        const user=getUserByEmail(email)

        if(user==null){
            return done(null,false,{message: "el usuario no existe"})
        }
try {
         if(await bcrypt.compare(password,user.password)){
             return  done(null,user)
         }
         else{ 
             return done(null,false,{message: "el password es incorrecto"})
             }
    }
catch(e){
        return done(e)

       }
}

passport.use(new localStrategy({usernameField: "email"},autenticacionUsuario()))
passport.use(serializeUser((user,done)=>done(null,user.id)))
passport.use(deserializeUser((id,done)=>{
    return done(null,getUserById(id))}))

}
module.exports = configPassport

