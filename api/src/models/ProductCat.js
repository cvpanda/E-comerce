const ProductCat = (sequelize, S) => {
  // defino el modelo  producto - categoria

  const PC = sequelize.define("productcat", {
    /*  idproductocat: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }, */
    idproducto: {
      //id del producto en tabla producto
      type: S.INTEGER,
      allowNull: false,
    },
    idcategoria: {
      //id de la categoria en tabla categoria
      type: S.INTEGER,
      allowNull: false,
    },
  });

  return PC;
};

module.exports = ProductCat;
