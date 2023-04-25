const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Categories = sequelize.define(
  "categories",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // categories: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   defaultValue: "plants",
    //   validate: {
    //     customValidator: (value) => {
    //       const enums = ["bouquets", "crowns", "plants"];
    //       if (!enums.includes(value)) {
    //         throw new Error("not a valid option");
    //       }
    //     },
    //   },
    // },
  },
  { timestamps: false }
);

module.exports = Categories;
