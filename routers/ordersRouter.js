const express = require('express');
const ordersRouter = express.Router();

const db = require('../db/db');

// ROUTES

/* get order by order Id */
ordersRouter.get('/id/:orderId', (req, res, next) => {
    const orderId = Number(req.params.orderId);

    db.query('SELECT * FROM orders WHERE id = $1', [orderId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.rows[0]);
    });
});


/* get all orders by user Id (happens upon login/authentication needed) */
ordersRouter.get('/user/:userId', (req, res, next) => {
    const userId = Number(req.params.userId);

    db.query('SELECT * FROM orders WHERE user_id = $1;', [userId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.rows)
    })
});


/* create new order (should come from what is in the user's cart/ users cart should be deleted once order is placed) */


/* update order (admin only, maybe allow user to update shipping address or something like that) */


/* delete order (admin only) */



module.exports = ordersRouter;