const Order = require("../models/ordermodel");
const ProductsModel = require("../models/productsModel");
const UserModel = require("../models/userModel");
const Order_products = require("../models/order_products");

const jwt = require("jsonwebtoken");

async function createOrder(req, res) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).send("user not authorized");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    const userId = decodedToken.id;

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }

    const order = await user.createOrder(req.body);

    const productsQTYs = req.body.productsQTYs;

    for (let i = 0; i < productsQTYs.length; i++) {
      await order.addProduct(productsQTYs[i].productId, {
        through: { QTY: productsQTYs[i].QTY },
      });

      const orderProduct = await Order_products.findOne({
        where: {
          productId: productsQTYs[i].productId,
          orderId: order.id,
        },
      });

      orderProduct.QTY = productsQTYs[i].QTY;
      await orderProduct.save();
    }

    return res.status(200).json({ message: "order created", order: order });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateOrderProduct(req, res) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).send("user not authorized");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    const userId = decodedToken.id;
    if (!userId) {
      return res.status(400).send("invalid user ID");
    }

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }
    const order = await Order.findByPk(req.params.id);

    await order.update(req.body, {
      return: true,
      fields: ["status", "totalPrice", "dataCreate"],
    });
    const productsQTYs = req.body.productsQTYs;
    for (let i = 0; i < productsQTYs.length; i++) {
      await order.addProduct(productsQTYs[i].productId);
      const orderProduct = await Order_products.findOne({
        where: {
          productId: productsQTYs[i].productId,
          orderId: req.params.id,
        },
      });
      orderProduct.QTY = productsQTYs[i].QTY;
      await orderProduct.save();
    }
    return res.status(200).json({ message: "Order updated", order: order });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getAllOrderByUser(req, res) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).send("user not authorized");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    const userId = decodedToken.id;
    if (!userId) {
      return res.status(400).send("invalid user ID");
    }

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }

    const orders = await Order.findAll({
      where: { userId: userId },
      include: [{ model: ProductsModel, through: Order_products }],
    });

    return res.status(200).json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  createOrder,
  updateOrderProduct,
  getAllOrderByUser,
};
