const getAllProducts = require('./get_all_products');
const createProduct = require('./create_product');
const getProductsById = require('./get_product_by_id');
const deleteProductById = require('./delete_product_by_id');
const updateProductById = require('./update_product_by_id');
const getProductByColumns = require('./get_product_by_columns');

module.exports = {
  getAllProducts,
  createProduct,
  getProductsById,
  deleteProductById,
  updateProductById,
  getProductByColumns,
};
