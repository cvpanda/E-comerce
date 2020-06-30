

const Category = (sequelize,S) => {
  // defino el modelo categoria

  const Cat = sequelize.define("categories", {
    /*  id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    }, */
    nombrecategoria: {
      type: S.STRING,
      allowNull: false,
    },
  });
  return Cat;
};

module.exports = Category;
