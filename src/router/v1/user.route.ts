import { Router } from "express";
import express from "express";
import {UserController} from "../../controller/v1/user.controller.js";

const router = Router();
const userController = new UserController();

router.get('/', userController.getUsers);

router.post('/user', userController.createUser);
export default router;