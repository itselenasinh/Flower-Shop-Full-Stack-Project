const Order = require("../models/ordermodel");
const ProductsModel = require("../models/productsModel");
const UserModel = require("../models/userModel");

async function getAllOrders(req, res) {
  try {
    const order = await Order.findAll({
      where: req.query,
    });
    if (!order) {
      return res.status(404).send("order not found");
    }
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function getOneOrder(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).send("order not found");
    }
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function createOrder(req, res) {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json({ message: "order create", order: order });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateOrder(req, res) {
  try {
    const [orderExist, order] = await Order.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    });
    if (orderExist !== 0) {
      return res.status(200).json({ message: "order updated", order: order });
    } else {
      return res.status(404).send("order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteorder(req, res) {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if (order) {
      await order.destroy();
      return res.status(200).json("Order deleted");
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOrderProduct(req, res) {
  try {
    const product = await ProductsModel.findByPk(req.params.productId, {
      include: [{ model: ProductsModel }],
    });
    if (!product) {
      return res.status(404).send("product not found");
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function removeConnectionOrderProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.productId);
    const order = await Order.findByPk(req.params.orderId);

    if (!order) {
      return res.status(404).send("order-product not found");
    }
    await order.removeproduct(product);
    await product.removeorder(order);
    return res.status(200).json("order-product relationship removed");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneorderUser(req, res) {
  try {
    console.log(req.params.categoryName);
    const user = await UserModel.findByPk({
      where: { category: req.params.userId },

      include: [
        {
          model: Order,
          attributes: ["totalPrice", "status"],
        },
      ],
    });
    if (!user) {
      return res.status(400).send("user not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(`${error.message}`);
  }
}

module.exports = {
  getAllOrders,
  updateOrder,
  createOrder,
  getOneOrder,
  deleteorder,
  getOrderProduct,
  removeConnectionOrderProduct,
  getOneorderUser,
};
