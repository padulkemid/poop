const express = require('express');

const { products } = require('../api');

const router = express.Router();

router.get('/products', products.allProducts);
router.post('/products', products.newProduct);
router.get('/products/:id', products.productById);
router.delete('/products/:id', products.delProductById);
router.patch('/products/:id', products.patchProductById);

module.exports = router;
