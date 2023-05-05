const router = require("express").Router();

const {
  getAllOrders,
  updateOrder,
  createOrder,
  getOneOrder,
  deleteorder,
  removeConnectionOrderProduct,
} = require("../controllers/orderController");

router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.get("/user/:userId");

router.post("/", createOrder);
router.put("/:id", updateOrder);

router.delete("/:id", deleteorder);
router.delete("/:orderId/products/:productId/", removeConnectionOrderProduct);

module.exports = router;
