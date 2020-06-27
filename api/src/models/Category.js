const Category = (sequelize, S) => {
  // defino el modelo categoria

  const Cat = sequelize.define("category", {
    /*   idcat: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }, */
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
  });
  return Cat;
};

module.exports = Category;
