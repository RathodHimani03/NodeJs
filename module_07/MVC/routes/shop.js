const path = require('path');

const express = require('express');

const productController = require('../Controller/product')
const router = express.Router();

router.get('/',productController.getProducts);

module.exports = router;
