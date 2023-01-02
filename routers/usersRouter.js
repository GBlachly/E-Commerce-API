const express = require('express');
const usersRouter = express.Router();

const db = require('../db/db');

//ROUTES
usersRouter.get('/:userId', (req, res, next) => {

});


module.exports = usersRouter;