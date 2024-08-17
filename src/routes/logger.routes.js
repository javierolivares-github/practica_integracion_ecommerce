import { Router } from "express";
import loggerControllers from "../controllers/logger.controllers.js";

const router = Router();

router.get("/loggertest", loggerControllers.loggerTest);

export default router;