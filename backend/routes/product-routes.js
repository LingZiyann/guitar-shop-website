import express from "express";
import { getProducts,getProductsByid } from "../controllers/products-controllers.js";

const productRouter = new express.Router();

productRouter.get('/products/all', getProducts);
productRouter.get('/products', getProductsByid);

export default productRouter;