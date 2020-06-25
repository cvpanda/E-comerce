const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define("products", {
    /*  idproducto: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }, */
    nombreproducto: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.STRING,
      allowNull: false,
    },
    valor: {
      type: S.DECIMAL(8, 2),
      allowNull: false,
    },
    //validar que no sea menor que 0 en el formulario
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
  });
  return P;
};
module.exports = Product;
