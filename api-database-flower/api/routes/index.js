const router = require("express").Router();

const authRouter = require("./authRouter.js");
const productRouter = require("./productRouter.js");
const categoryRouter = require("./categoryRouter.js");
const profileRouter = require("./userRouter.js");
const orderRouter = require("./orderRouter.js");

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/profile", profileRouter);
router.use("/order", orderRouter);

module.exports = router;
