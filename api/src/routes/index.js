const { Router } = require("express");
const router = Router();
const Prod = require("./product.js");
const Cat = require("./category.js");

// import all routers;
const authRouter = require("./auth.js");

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use("/auth", authRouter);

router.use("/productos", Prod);

router.use("/categoria", Cat);

module.exports = router;
