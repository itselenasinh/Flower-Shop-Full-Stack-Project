const router = require("express").Router();

const authRouter = require("./authRouter.js");

router.use("/auth", authRouter);

module.exports = router;
