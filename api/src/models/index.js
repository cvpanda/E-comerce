const fs = require("fs");
const path = require("path");
const db = require("../db.js");

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split(".")[0];
    models[name] = model;
  });

const { Product, ProductCat, Category, Users, Carrito,Orden , Review} = models;

// Add model relationships here
Product.belongsToMany(Category, { through: "catpro"})
Category.belongsToMany(Product, { through: "procat"})
//Product.hasMany(Category);
//Category.belongsTo(Product);
Users.hasOne(Carrito)
Carrito.belongsTo(Users)
Carrito.hasMany(Orden)
Orden.belongsTo(Carrito)
//relaciones REVIEW
Product.hasMany(Review)
Review.belongsTo(Product)

module.exports = models;


