const all = require('./all');

module.exports = {
  products: {
    allProducts: all.getAllProducts,
    productById: all.getProductsById,
    newProduct: all.createProduct,
  },
};
