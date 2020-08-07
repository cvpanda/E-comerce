
const Category = (sequelize,S) => {
  const Cat = sequelize.define("categories", {
    nombrecategoria: {
      type: S.STRING,
      allowNull: false,
    },
  },{
    timestamps: false,
    
    
  });
  return Cat;
};

module.exports = Category;
