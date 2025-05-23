import { Router } from "express";
import { UserController } from "../../../controller/webhooks/user.controller.js";
import express from "express";

const router = Router();
const  rawBody = express.raw({ type: 'application/json' });
const userController = new UserController();

router.post('/user',rawBody,userController.updateUser);
router.post('/deleteUser',rawBody,userController.deleteUser)

export default router;