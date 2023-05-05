const ProductsModel = require("../models/productsModel");
const Categories = require("../models/categoriesModel");
const { Op } = require("sequelize");

async function getProduct(req, res) {
  try {
    const product = await ProductsModel.findAll({
      where: {
        productName: { [Op.iLike]: `%${req.query.productName}%` },
      },
      attributes: ["productName", "price", "description", "picture"],
    });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneProduct(req, res) {
  try {
    const product = await ProductsModel.findByPk(req.params.id);
    if (!product) {
      return res.status(400).send("Product not found");
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getCategoriesProducts(req, res) {
  try {
    const categories = await Categories.findAll({
      where: req.query,
      include: [
        {
          model: ProductsModel,
          attributes: ["productName", "price", "description", "picture"],
        },
      ],
    });
    if (!categories) {
      return res.status(400).send("categories not found");
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).send(`${error.message}`);
  }
}

async function getOneCategoriesProducts(req, res) {
  try {
   
    const categories = await Categories.findAll({
      where: { category: req.params.categoryName },
      attributes: ["category"],
      include: [
        {
          model: ProductsModel,
          attributes: ["productName", "price", "description", "picture"],
        },
      ],
    });
    if (!categories) {
      return res.status(400).send("categories not found");
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).send(`${error.message}`);
  }
}

async function addConnectionOrderProduct(req, res) {
  try {
    const order = await order.findByPk(req.params.orderId);
    const product = await ProductsModel.findByPk(req.params.productId);
    await order.addproucts(product);
    const products = await order.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function removeConnectionOrderProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.productId);
    const order = await Order.findByPk(req.params.orderId);

    if (!product) {
      return res.status(404).send("order-product not found");
    }
    await order.removeproduct(product);
    await product.removeorder(order);
    return res.status(200).json("order-product relationship removed");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getProduct,
  getOneProduct,
  getCategoriesProducts,
  getOneCategoriesProducts,
  addConnectionOrderProduct,
  removeConnectionOrderProduct,
};
