const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Categories = sequelize.define(
  "categories",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = Categories;
