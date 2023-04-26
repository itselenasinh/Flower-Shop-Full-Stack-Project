const Categories = require("../models/categoriesModel");

async function getCategories(req, res) {
  try {
    const category = await Categories.findAll({
      where: req.query,
      attributes: ["category"],
    });

    if (!category) {
      return res.status(404).send("category not found");
    }

    return res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getCategories,
};
