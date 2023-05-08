const UserModel = require("../api/models/userModel");
const ProductsModel = require("../api/models/productsModel");
const Order = require("../api/models/ordermodel");
const Categories = require("../api/models/categoriesModel");
const Order_products = require("../api/models/order_products");

function addRelations() {
  try {
    //relation one to many
    Categories.hasMany(ProductsModel);
    ProductsModel.belongsTo(Categories);

    UserModel.hasMany(Order);
    Order.belongsTo(UserModel);

    //relation many to many

    Order.belongsToMany(ProductsModel, {
      through: Order_products,
      timestamps: false,
    });
    ProductsModel.belongsToMany(Order, {
      through: Order_products,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = addRelations;
