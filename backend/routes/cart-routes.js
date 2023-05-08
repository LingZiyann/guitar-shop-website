import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cart-controllers.js";
import { auth } from "../middleware/auth.js";

const cartRouter = new express.Router();

cartRouter.post('/cart', auth , addToCart);
cartRouter.delete('/cart/:pid', auth , removeFromCart);
cartRouter.get('/cart', auth ,getCart);

export default cartRouter;
