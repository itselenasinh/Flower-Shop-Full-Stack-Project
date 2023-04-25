const router = require("express").Router();

const { getCategories } = require("../controllers/categoryController");

router.get("/", getCategories);

module.exports = router;
