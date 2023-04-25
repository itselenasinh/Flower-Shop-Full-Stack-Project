const ProductsModel = require("../models/productsModel");

async function getProduct(req, res) {
  try {
    const product = await ProductsModel.findAll({
      where: req.query,
      attributes: ["productName", "price", "description", " picture"],
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
    const product = await ProductsModel.findByPk(req.params.id, {
      
    })
  }
}
module.exports = {
  getProduct,
};
