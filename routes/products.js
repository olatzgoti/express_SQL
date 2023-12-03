const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();



router.get('/', productController.getAllProducts);
router.post('/new', productController.create);
router.post('/getById', productController.getProdById);
router.delete('/ById', productController.delete);
//FALTA UPDATE
router.put('/id/:id', productController.update);

module.exports = router;