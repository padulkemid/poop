const getAllProducts = require('./get_all_products');
const getProductsById = require('./get_product_by_id');
const createProduct = require('./create_product');
const deleteProductById = require('./delete_product_by_id');

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  deleteProductById,
};
