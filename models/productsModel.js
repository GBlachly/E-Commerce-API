const db = require('../db/db');


const getAllProducts = (req, res, next) => {
    db.query('SELECT * FROM products;', [], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).json( result.rows );
    });

};


const getProductById = (req, res, next) => {
    const productId = Number(req.params.productId);
    
    db.query('SELECT * FROM products WHERE id = $1;', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).json( result.rows[0] );
    });
};


const createProduct = (req, res, next) => {
    const { name, price, stock } = req.body;

    db.query('INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *;', [name, price, stock], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(201).send(`Product created with ID: ${result.rows[0].id}`)
    });
    
};


const updateProduct = (req, res, next) => {
    const productId = Number(req.params.productId);
    const { name, price, stock } = req.body;

    db.query('ALTER TABLE products SET name = $2, price = $3, stock = $4 WHERE id = $1;', [productId, name, price, stock], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(`Product with ID: ${productId} was updated`)
    });
    
};


const deleteProduct = (req, res, next) => {
    const productId = Number(req.params.productId);

    db.query('DELETE FROM products WHERE id = $1;', [productId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(`Product with ID: ${productId} was deleted`)
    });
    
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct, 
    updateProduct,
    deleteProduct
};