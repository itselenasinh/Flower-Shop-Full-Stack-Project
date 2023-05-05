const router = require("express").Router();

const {
  removeConnectionOrderProduct,
} = require("../controllers/orderController");
const {
  getProduct,
  getCategoriesProducts,
  getOneCategoriesProducts,
  getOneProduct,
  addConnectionOrderProduct,
} = require("../controllers/productController");

router.get("/", getProduct);
router.get("/:id", getOneProduct);
router.get("/categories/:categoryName", getOneCategoriesProducts);
router.get("/categories", getCategoriesProducts);

router.post("/:productId/order/:orderId", addConnectionOrderProduct);
router.delete("/:productId/order/:orderId", removeConnectionOrderProduct);
module.exports = router;
