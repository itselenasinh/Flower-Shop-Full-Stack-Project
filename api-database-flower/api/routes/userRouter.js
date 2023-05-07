const router = require("express").Router();

const { authenticate } = require("../utils/index");
const { getUserProfile } = require("../controllers/userController");

router.get("/", authenticate, getUserProfile);

module.exports = router;
