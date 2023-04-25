const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "orders",
  {
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dataCreate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

module.exports = Order;
