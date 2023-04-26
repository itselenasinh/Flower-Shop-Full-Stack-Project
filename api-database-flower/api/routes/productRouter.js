const router = require("express").Router();

const {
  getProduct,
  getCategoriesProducts,
  getOneCategoriesProducts,
} = require("../controllers/productController");

router.get("/", getProduct);
router.get("/categories/:categoriesId", getOneCategoriesProducts);
router.get("/categories", getCategoriesProducts);
module.exports = router;
