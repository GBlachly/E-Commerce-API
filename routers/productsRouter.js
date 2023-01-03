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
});


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
productsRouter.post('/', (req, res, next) => {
    const { name, price, stock } = req.body;

    db.query('INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *;', [name, price, stock], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(201).send(`Product created with ID: ${result.rows[0].id}`)
    });
});


/* update product (admin only/ except for stock which should update when product is added to an order) */
productsRouter.put('/:productId', (req, res, next) => {
    const productId = Number(req.params.productId);
    const { name, price, stock } = req.body;

    db.query('ALTER TABLE products SET name = $2, price = $3, stock = $4 WHERE id = $1;', [productId, name, price, stock], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(`Product with ID: ${productId} was updated`)
    });
});


/* delete product by Id (admin only) */
productsRouter.delete('/:productId', (req, res, next) => {
    let productId = Number(req.params.productId);

    db.query('DELETE FROM products WHERE id = $1;', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(`Product with ID: ${productId} was deleted`)
    });
});



module.exports = productsRouter;