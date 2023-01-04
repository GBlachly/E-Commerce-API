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

/* get all products (authentication of user not needed) */
productsRouter.get('/', getAllProducts);

/* get product by id (may want to add a route to get product by name) (authentication of user not needed) */
productsRouter.get('/:productId', getProductById);

/* create new product (admin only) */
productsRouter.post('/', createProduct);

/* update product (stock should update when product is added to an order/ otherwise admin only) */
productsRouter.put('/:productId', updateProduct);

/* delete product by Id (admin only) */
productsRouter.delete('/:productId', deleteProduct);


module.exports = productsRouter;