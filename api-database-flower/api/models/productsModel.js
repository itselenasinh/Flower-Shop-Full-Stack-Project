const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const ProductsModel = sequelize.define(
  "products",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.BLOB,
      allowNull: true,
      //cloudinay
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = ProductsModel;
