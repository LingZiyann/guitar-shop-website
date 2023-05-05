import express from "express";
import { getProducts } from "../controllers/products-controllers.js";

const productRouter = new express.Router();

productRouter.get('/products', getProducts)

export default productRouter