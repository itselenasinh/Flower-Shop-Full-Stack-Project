const router = require("express").Router();

const { authenticate } = require("../utils/index");
const {
  getAllOrders,
  updateOrder,
  createOrder,
  getOneOrder,
  deleteorder,
  removeConnectionOrderProduct,
  getAllOrderByUser,
} = require("../controllers/orderController");

//router.get("/", authenticate, getAllOrders);
//router.get("/:id", getOneOrder);
router.get("/", authenticate, getAllOrderByUser);

router.post("/", authenticate, createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteorder);
router.delete("/:orderId/products/:productId/", removeConnectionOrderProduct);

module.exports = router;
