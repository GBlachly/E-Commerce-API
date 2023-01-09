const express = require('express');
const passport = require('passport');
const usersRouter = express.Router();

const { registerUser } = require('../models/usersModel');

// ROUTES 

/* logout user */
usersRouter.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
    });
    res.status(200).send('User logged out');
    //res.redirect("/");
  }
);
  

/* load login page  */
usersRouter.get('/login', (req, res, next) => {
    res.status(200).send('Welcome to the Login Page');
    //res.render();
});


/* login user with local strategy */
usersRouter.post(
    '/login', 
    passport.authenticate("local"/*, { failureRedirect: '/login', failureMessage: true} */), 
    (req, res, next) => {
        res.status(200).send(`User: ${req.user.username} w/ email ${req.user.email} logged in`)
    }
);

/* login user with google strategy */

/* login user with facebook strategy */

/* create new user (authentication of user not needed) */
usersRouter.post('/register', registerUser);


/* update user information  */


/* delete user account  */



module.exports = usersRouter;