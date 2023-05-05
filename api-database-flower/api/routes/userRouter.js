const router = require("express").Router();

const {
  getUserProfile,
  getOrderUser,
} = require("../controllers/userController");

router.get("/", getUserProfile);
router.get("/:userId/order/:orderId", getOrderUser);

module.exports = router;
