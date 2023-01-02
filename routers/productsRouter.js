const express = require('express');
const productsRouter = express.Router();

const db = require('../db/db');

//ROUTES
productsRouter.get('/:productId', (req, res, next) => {
    let productId = Number(req.params.productId);

    db.query('SELECT * FROM products WHERE id = $1', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).json( result.rows[0] );
    });
});




module.exports = productsRouter;