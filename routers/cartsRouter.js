const express = require('express');
const cartsRouter = express.Router();

const db = require('../db/db');

//ROUTES
cartsRouter.get('/:cartId', (req, res, next) => {

});


module.exports = cartsRouter;