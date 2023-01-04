const express = require('express');
const cartsRouter = express.Router();

const db = require('../db/db');

//ROUTES

/* create users cart (should be created at the same time that the users account is created/ 
starts off empty/ prob doesnt need its own path (same path as create user)) */


/* get users cart by user id (possibly happens upon login) */
cartsRouter.get('/:userId', (req, res, next) => {
    const userId = Number(req.params.userId);

    db.query('SELECT * FROM carts WHERE user_id = $1', [userId], (err, result) => {
        if (err) {
            return next(err)
        }
        res.status(200).send(result.row[0]);
    })
});


/* update user cart (happens when user adds or deletes product from cart) */


/* alter/empty user cart (happens when order is placed/ may need to make placing order 
and emptying cart use the same path) */


/* delete user cart (happens when user deleted their account/ 
prob doesnt need its own path (same path as delete user)) */



module.exports = cartsRouter;