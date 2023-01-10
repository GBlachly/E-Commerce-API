const express = require('express');
const productsRouter = express.Router();

const {
    getAllProducts,
    getProductByName,
    createProduct, 
    updateProduct,
    deleteProduct
} = require('../models/productsModel');

const checkAdmin = require('../passportStrats/checkAdmin');

// USER ROUTES
/* get all products (authentication of user not needed) */
productsRouter.get('/', getAllProducts);

/* get product by name (authentication of user not needed) */
productsRouter.get('/:productName', getProductByName);



// ADMIN ROUTES
/* create new product (admin only) */
productsRouter.post('/', checkAdmin, createProduct);

/* update product (stock should update when product is added to an order/ otherwise admin only) */
productsRouter.put('/:productId', checkAdmin, updateProduct);

/* delete product by Id (admin only) */
productsRouter.delete('/:productId', checkAdmin, deleteProduct);


module.exports = productsRouter;