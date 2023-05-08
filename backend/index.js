import express from 'express';
import pg from 'pg';
import productRouter from './routes/product-routes.js'
import cartRouter from './routes/cart-routes.js';
import userRouter from './routes/user-routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(productRouter);
app.use(cartRouter);
app.use(userRouter);


app.listen(5000, () => {
    console.log('app on 5000!')
});