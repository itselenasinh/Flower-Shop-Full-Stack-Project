const ProductsModel = require("../models/productsModel");
const Categories = require("../models/categoriesModel");

async function getProduct(req, res) {
  try {
    const product = await ProductsModel.findAll({
      where: req.query,
      attributes: ["productName", "price", "description", "picture"],
    });

    if (!product) {
      return res.status(404).send("Product not");
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
    const categories = await Categories.findByPk(req.params.categoriesId, {
      include: [
        {
          model: Categories,
          attributes: ["categoriesName"],
        },
      ],
    });
    if (!categories) {
      return res.status(400).send("categories not found");
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res
      .status(500)
      .send(`Error retrieving doctor's patients: ${error.message}`);
  }
}
module.exports = {
  getProduct,
  getOneProduct,
  getCategoriesProducts,
};
