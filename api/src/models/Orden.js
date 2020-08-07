
const Orden = (sequelize,S) => {
    const Orden = sequelize.define("orden", {
      idproducto:{
        type: S.INTEGER,
        allowNull: true,
      },
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
    
    
    return Orden;
  };
  
  module.exports = Orden;