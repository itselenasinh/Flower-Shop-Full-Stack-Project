const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "orders",
  {
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "processing",
      validate: {
        customValidator: (value) => {
          const enums = ["processing", "acepted", "reject"];
          if (!enums.includes(value)) {
            throw new Error("not a valid option");
          }
        },
      },
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
