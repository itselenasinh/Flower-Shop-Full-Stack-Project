const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const ProductsModel = sequelize.define("products", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
