import { Router } from "express";
import express from "express";
import {UserController} from "../../controller/user.controller.js";

const router = Router();
const userController = new UserController();

router.get('/', userController.getUsers);

//TODO:Handle clerk webhook properly in future
router.post('/user',express.raw({type: 'application/json'}), userController.createUser);
export default router;