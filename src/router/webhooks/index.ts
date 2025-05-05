import { Router } from "express";
import clerkWebhook from "./clerk/index.js";

const router = Router();
router.use('/clerk', clerkWebhook);

export default router;