const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product');


router.get('/detail', ProductController.productData);

module.exports = router;