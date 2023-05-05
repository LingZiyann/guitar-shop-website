import express from 'express';
import pg from 'pg';
import productRouter from './routes/product-routes.js'
import cartRouter from './routes/cart-routes.js';

const app = express();
app.use(express.json());

app.use(productRouter);
app.use(cartRouter);

app.listen(5000, () => {
    console.log('app on 5000!')
});