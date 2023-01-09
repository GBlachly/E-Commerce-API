const express = require('express');
const usersRouter = express.Router();

const {
    registerUser
} = require('../models/usersModel');

// ROUTES 

/* get user  */


/* create new user (authentication of user not needed) */
usersRouter.post('/register', registerUser);

/* update user information  */


/* delete user account  */



module.exports = usersRouter;