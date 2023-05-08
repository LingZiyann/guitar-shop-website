import express from "express";
import { login,signup } from "../controllers/user-controllers.js";

const userRouter = new express.Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);

export default userRouter;