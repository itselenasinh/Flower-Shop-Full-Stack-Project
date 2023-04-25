const Categories = require("../models/categoriesModel");
const ProductsModel = require("../models/productsModel");

async function getCategories(req, res) {
  try {
    const category = await Categories.findAll({
      where: req.query,
      attributes: ["categoryName"],
    });

    if (!category) {
      return res.status(404).send("category not found");
    }

    return res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getCategoriesProducts(req, res) {
  try {
    const product = await ProductsModel.findByPk(req.params.id, {
      include: [
        {
          model: ProductsModel,
          attributes: ["productName", "price", "description", " picture"],
        },
      ],
    });
    if (!product) {
      return res.status(400).send("product not found");
    }
    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .send(`Error retrieving doctor's patients: ${error.message}`);
  }
}
module.exports = {
  getCategories,
  getCategoriesProducts,
};
