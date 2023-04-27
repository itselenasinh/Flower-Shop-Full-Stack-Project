const router = require("express").Router();

const {
  getProduct,
  getCategoriesProducts,
  getOneCategoriesProducts,
} = require("../controllers/productController");

router.get("/", getProduct);
router.get("/categories/:categoryName", getOneCategoriesProducts);
router.get("/categories", getCategoriesProducts);
module.exports = router;
