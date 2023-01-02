const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan'); 

const PORT = process.env.port || 4001;

const usersRouter = require('./routers/usersRouter.js');
const productsRouter = require('./routers/productsRouter.js');
const ordersRouter = require('./routers/ordersRouter.js');
const cartsRouter = require('./routers/cartsRouter.js');

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
  