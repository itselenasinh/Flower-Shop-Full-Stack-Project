const UserModel = require("../api/models/userModel");
const ProductsModel = require("../api/models/productsModel");
const Order = require("../api/models/ordermodel");
const Categories = require("../api/models/categoriesModel");

function addRelations() {
  try {
    //relation one to many
    Categories.hasMany(ProductsModel);
    ProductsModel.belongsTo(Categories);

    UserModel.hasMany(Order);
    Order.belongsTo(UserModel);

    //relation many to many

    Order.belongsToMany(ProductsModel, {
      through: "order_products",
      timestamps: false,
    });
    ProductsModel.belongsToMany(Order, {
      through: "order_products",
    });
  } catch (error) {
    throw error;
  }
}

module.exports = addRelations;
