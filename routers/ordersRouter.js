const express = require('express');
const ordersRouter = express.Router();

const db = require('../db/db');

//ROUTES
ordersRouter.get('/:orderId', (req, res, next) => {
    let orderId = Number(req.params.orderId);

    db.query('SELECT * FROM orders WHERE id = $1', [orderId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.rows[0]);
    });

});




module.exports = ordersRouter;