import { Router } from "express";
import userWebhook from "./user.webhook.js";
const router = Router();
router.use('/users',userWebhook);
export default router;