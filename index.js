const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.port || 4001;

const usersRouter = require('./routers/usersRouter.js');
const productsRouter = require('./routers/productsRouter.js');
const ordersRouter = require('./routers/ordersRouter.js');
const cartsRouter = require('./routers/cartsRouter.js');



app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/carts', cartsRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  