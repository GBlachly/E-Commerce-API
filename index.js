const express = require('express');
const app = express();
const session = require('express-session');
const store = new session.MemoryStore();
/* Note: Storing in-memory sessions is something that should be done only 
during development, NOT during production due to security risks. */

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 

const PORT = process.env.port || 4001;

const usersRouter = require('./routers/usersRouter.js');
const productsRouter = require('./routers/productsRouter.js');
const ordersRouter = require('./routers/ordersRouter.js');
const cartsRouter = require('./routers/cartsRouter.js');

app.use(
  session({
    secret: "RandomString1234", //this random string should be stored securely in an environment variable
    cookie: { maxAge: 1000 * 60 *60 * 24, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.use(passport.initialize()); // notes 4.7 pg. 78
app.use(passport.session());

app.use(cors()); //Not sure where this goes exactly or if i actually need it 
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/carts', cartsRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Error Occured';
  res.status(status).send(message);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  