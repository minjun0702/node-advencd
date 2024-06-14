import express from "express";
import { requireAccessToken } from "../middlewares/require-access-token.middleware.js";
import { UserController } from "../controllers/user.controlles.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/me", requireAccessToken, userController.getMe);

export { userRouter };
