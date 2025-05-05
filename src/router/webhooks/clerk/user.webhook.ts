import { Router } from "express";
import { UserController } from "../../../controller/webhooks/user.controller";

const router = Router();
const userController = new UserController();

router.post('/user',userController.updateUser);

export default router;