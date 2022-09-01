const express = require('express');
const categoryRoute = require('./routes/categoryRoute');
const transactionRoute = require('./routes/transactionRoute');
const notFoundMiddleware = require('./middlewares/notFound');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/categories', categoryRoute);
app.use('/transactions', transactionRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8001, console.log('server running on port 8001'));
