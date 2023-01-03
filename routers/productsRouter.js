const express = require('express');
const productsRouter = express.Router();

const db = require('../db/db');

// ROUTES

/* get all products */
productsRouter.get('/', (req, res, next) => {
    db.query('SELECT * FROM products;', [], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).json( result.rows );
    });
})

/* get product by id */
productsRouter.get('/:productId', (req, res, next) => {
    let productId = Number(req.params.productId);

    db.query('SELECT * FROM products WHERE id = $1;', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).json( result.rows[0] );
    });
});

/* create new product (admin only) */

/* update product (admin only/ except for stock which should update when product is added to an order) */

/* delete product (admin only) */



module.exports = productsRouter;