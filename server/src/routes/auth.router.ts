import { Router } from "express";

// Controller imports
import { login } from "../controllers/auth.controller";

// Router initialization
const router = Router();

// Login
router.post("/login", login);

export default router;
