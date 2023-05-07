const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Order_products = sequelize.define(
  "order_product",
  {
    QTY: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Order_products;
