const Order = require("../models/ordermodel");
const ProductsModel = require("../models/productsModel");
const UserModel = require("../models/userModel");
const Order_products = require("../models/order_products");

const jwt = require("jsonwebtoken");

// async function getAllOrders(req, res) {
//   try {
//     const order = await Order.findAll({
//       where: req.query,
//     });
//     if (!order) {
//       return res.status(404).send("order not found");
//     }
//     return res.status(200).json(order);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// async function getOneOrder(req, res) {
//   try {
//     const order = await Order.findByPk(req.params.id);
//     if (!order) {
//       return res.status(404).send("order not found");
//     }
//     return res.status(200).json(order);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// async function updateOrder(req, res) {
//   try {
//     const [orderExist, order] = await Order.update(req.body, {
//       returning: true,
//       where: { id: req.params.id },
//     });
//     if (orderExist !== 0) {
//       return res.status(200).json({ message: "order updated", order: order });
//     } else {
//       return res.status(404).send("order not found");
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// async function deleteorder(req, res) {
//   try {
//     const order = await Order.findOne({ where: { id: req.params.id } });
//     if (order) {
//       await order.destroy();
//       return res.status(200).json("Order deleted");
//     } else {
//       return res.status(404).send("Order not found");
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// async function getOrderProduct(req, res) {
//   try {
//     const product = await ProductsModel.findByPk(req.params.productId, {
//       include: [{ model: ProductsModel }],
//     });
//     if (!product) {
//       return res.status(404).send("product not found");
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// async function removeConnectionOrderProduct(req, res) {
//   try {
//     const product = await Product.findByPk(req.params.productId);
//     const order = await Order.findByPk(req.params.orderId);

//     if (!order) {
//       return res.status(404).send("order-product not found");
//     }
//     await order.removeproduct(product);
//     await product.removeorder(order);
//     return res.status(200).json("order-product relationship removed");
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

// async function getOneorderUser(req, res) {
//   try {
//     console.log(req.params.categoryName);
//     const user = await UserModel.findByPk({
//       where: { category: req.params.userId },

//       include: [
//         {
//           model: Order,
//           attributes: ["totalPrice", "status"],
//         },
//       ],
//     });
//     if (!user) {
//       return res.status(400).send("user not found");
//     }
//     return res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).send(`${error.message}`);
//   }
// }

async function createOrder(req, res) {
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

    const order = await user.createOrder(req.body, {
      attributes: ["status", "totalPrice", "dataCreate"],
    });

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
  // getAllOrders,
  // updateOrder,
  createOrder,
  // getOneOrder,
  // deleteorder,
  // getOrderProduct,
  // getOneorderUser,
  // removeConnectionOrderProduct,
  updateOrderProduct,
  getAllOrderByUser,
};
