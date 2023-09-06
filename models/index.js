// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Products belongsTo Category
Product.belongsTo(Category, {

});

// TODO: Categories have many Products
Category.hasMany(Product, {

});

// TODO: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  
});

// TODO: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
