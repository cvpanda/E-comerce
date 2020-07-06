
const Carrito = (sequelize,S) => {
    const Carrito = sequelize.define("carrito", {
      cantidad: {
        type: S.INTEGER,
        allowNull: true,
      },
      total: {
        type: S.INTEGER,
        allowNull: true,
      },
    },{
      timestamps: false,
      
    });
    return Carrito;
  };
  
  module.exports = Carrito;
  