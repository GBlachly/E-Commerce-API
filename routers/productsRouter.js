const express = require('express');
const productsRouter = express.Router();

const db = require('../db/db');

//ROUTES
productsRouter.get('/:productId', (req, res, next) => {

});


module.exports = productsRouter;