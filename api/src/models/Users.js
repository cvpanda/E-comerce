const Users = (sequelize, S) => {
  
    const User = sequelize.define("users",{
      nombreusuario: {
        type: S.STRING,
        allowNull: false,
      },
      contraseña:{
        type: S.STRING,
        allowNull: false,
      },
      nombre: {
        type: S.STRING,
        allowNull: true,
      },
      email: {
        type: S.STRING,
        allowNull: false,
      },
      fechanacimiento: {
        type: S.INTEGER,
        allowNull: true,
      },
      direccion:{
        type: S.STRING,
        allowNull: true,
      }, 
      cp: {
        type: S.INTEGER,
        allowNull: true,
      },
      pais: {
        type: S.STRING,
        allowNull: true,
      },
      ciudad: {
        type: S.STRING,
        allowNull: true,
      },
      foto: {
        type: S.STRING,
        allowNull: true,
      },
    },{
      timestamps: false,
      
    });
   
    return User;
  };
  
  module.exports = Users;
  