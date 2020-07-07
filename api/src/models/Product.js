const Product = (sequelize, S) => {
  // defino el modelo
  const Product = sequelize.define("products", {
    /* idproducto: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }, */
    nombreproducto: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type:S.TEXT,
      allowNull: false,
    },
    valor: {
      type: S.INTEGER,
      allowNull:false,
      validate: {
        min: 0,
      },
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
     
imagen: {
      type: S.STRING
    }

  },{
    timestamps: false,
    

  });
  return Product;
};

module.exports = Product;
