const express = require('express');
const ordersRouter = express.Router();

const {
    getOrderById,
    getOrdersByUserId,
    createOrder,
} = require('../models/ordersModel');


// ROUTES

/* get order by order Id */
ordersRouter.get('/id/:orderId', getOrderById);


/* get all orders by user Id (happens upon login/authentication needed) */
ordersRouter.get('/user/:userId', getOrdersByUserId);


/* create new order (should come from what is in the user's cart/ users cart should be deleted once order is placed) */
ordersRouter.post('/', createOrder);


/* update order (admin only, maybe allow user to update shipping address or something like that) */


/* delete order (admin only) */



module.exports = ordersRouter;