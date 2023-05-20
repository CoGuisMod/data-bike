import { Router } from "express";

// Router imports
import authRouter from "./auth.router";
import managementRouter from "./management.router";

// Auth token middleware import
import { authToken } from "../middlewares/authToken.middleware";

// Router initialization
const router = Router();

// Router setup
router.use("/auth", authRouter);
router.use("/management", authToken, managementRouter);

export default router;
