const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Categories = sequelize.define(
  "categories",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = Categories;
