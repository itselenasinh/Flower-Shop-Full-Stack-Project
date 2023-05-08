const UserModel = require("../models/userModel");
const Order = require("../models/ordermodel");

const jwt = require("jsonwebtoken");

const getUserProfile = async (req, res) => {
  try {
    if (!req.headers.token) {
      return res.status(403).json({ error: "no token found" });
    }
    const decodedToken = jwt.verify(req.headers.token, process.env.SECRET);
    const email = decodedToken.email;

    const user = await UserModel.findOne({
      where: { email: email },
      attributes: {
        exclude: ["password"],
      },
    });
    return !user
      ? res.status(404).send("User not found")
      : res.status(200).json({
          fullName: user.fullName,
          email: user.email,
          address: user.address,
          phone: user.phone,
        });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// async function getOrderUser(req, res) {
//   try {
//     const user = await UserModel.findByPk(req.params.id);
//     const order = await Order.findByPk(req.params.orderId, {
//       include: [{ model: UserModel, attributes: ["fullName"] }],
//     });
//     if (!order) {
//       return res.status(404).send(`Sorry order not found`);
//     }
//     return res.status(200).json(order);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

module.exports = {
  getUserProfile,
};
