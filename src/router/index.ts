import {Router} from "express";
import v1 from "./v1/index.js";
import webhooks from "./webhooks/index.js";
const router = Router();

router.use('/api/v1',v1);
router.use('/webhooks/v1',webhooks);

export default router;