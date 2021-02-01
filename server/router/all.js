const express = require('express');

const { products } = require('../api');

const router = express.Router();

router.get('/products', products.allProducts);
router.get('/products/:id', products.productById);
router.post('/products', products.newProduct);
router.delete('/products/:id', products.delProductById);

module.exports = router;
