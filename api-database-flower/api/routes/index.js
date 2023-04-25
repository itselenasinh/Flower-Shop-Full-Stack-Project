const router = require("express").Router();

const authRouter = require("./authRouter.js");
const productRouter = require("./productRouter.js");
const categoryRouter = require("./categoryRouter.js");

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

module.exports = router;
