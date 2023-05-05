import express from "express";
import pg from 'pg';
import { addToCart } from "../controllers/cart-controllers.js";

const cartRouter = new express.Router();

cartRouter.post('/cart', addToCart)

export default cartRouter;