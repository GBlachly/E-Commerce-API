const express = require('express');
const productsRouter = express.Router();

const {
    getAllProducts,
    getProductById,
    createProduct, 
    updateProduct,
    deleteProduct
} = require('../models/productsModel');

// ROUTES

/* get all products */
productsRouter.get('/', getAllProducts);

/* get product by id */
productsRouter.get('/:productId', getProductById);

/* create new product (admin only) */
productsRouter.post('/', createProduct);

/* update product (admin only/ except for stock which should update when product is added to an order) */
productsRouter.put('/:productId', updateProduct);

/* delete product by Id (admin only) */
productsRouter.delete('/:productId', deleteProduct);


module.exports = productsRouter;