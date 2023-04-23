const router = require("express").Router();

const authRouter = require("./autthRouter.js");

router.use("/auth", authRouter);

module.exports = router;
