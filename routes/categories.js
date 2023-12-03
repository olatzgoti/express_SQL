const express = require('express');
const categoriesController = require('../controller/categoriesController.js');
const router = express.Router();


router.get('/', categoriesController.getAllCategories);
router.post('/', categoriesController.getCatById);
router.post('/new', categoriesController.create);
router.delete('/byId', categoriesController.delete);
//FALTA UPDATE

module.exports = router;
