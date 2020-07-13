const { Router } = require("express");
const router = Router();
const Prod = require("./product.js");
const Cat = require("./category.js");
const Carr = require("./carrito.js");
const Us = require("./users.js");
const Or = require("./orden.js");
const authRouter = require("./auth.js");
const Rev = require("./review.js")

router.use("/auth", authRouter);

router.use("/productos", Prod);

router.use("/categoria", Cat);

router.use("/usuario", Us);

router.use("/carrito", Carr);

router.use("/orden", Or);

router.use("/review", Rev)

module.exports = router;
