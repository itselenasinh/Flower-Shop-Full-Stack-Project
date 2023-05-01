const router = require("express").Router();

const {
  getProduct,
  getCategoriesProducts,
  getOneCategoriesProducts,
  getOneProduct,
} = require("../controllers/productController");

router.get("/", getProduct);
router.get("/:id", getOneProduct);
router.get("/categories/:categoryName", getOneCategoriesProducts);
router.get("/categories", getCategoriesProducts);

module.exports = router;
