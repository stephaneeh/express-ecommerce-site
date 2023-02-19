// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', //FIXME:
});

// TODO: Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'catogory_id',
  onDelete: 'CASCADE', //FIXME:
});

// TODO: Products belongToMany Tags (through ProductTag)

// TODO: Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
