const router = require("express").Router();

const { authenticate } = require("../utils/index");
const {
  getUserProfile,
  getOrderUser,
} = require("../controllers/userController");

router.get("/", authenticate, getUserProfile);
router.get("/:userId/order/:orderId", getOrderUser);

module.exports = router;
