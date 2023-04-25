const router = require("express").Router();

const {
  getProduct,
  getCategoriesProducts,
} = require("../controllers/productController");

router.get("/", getProduct);
router.get("/categories/:categoriesId", getCategoriesProducts);
module.exports = router;
