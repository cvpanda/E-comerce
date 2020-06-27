const { Router } = require("express");
const router = Router();
const agregarProd = require("./product.js");

// import all routers;
const authRouter = require("./auth.js");

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use("/auth", authRouter);
console.log('hola soy test')
router.use("/products", agregarProd);

module.exports = router;
