const router = require("express").Router();

const { signup, login } = require("../controllers/authController");

router.post("/singnup", signup);
router.post("/login", login);

module.exports = router;
