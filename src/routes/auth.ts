import { Router } from "express";
// const authMiddleware = require("../middlewares/auth-middleware");
import authRouter from "../middlewares/auth-middleware";

import { signup, getUserInfo, login, logout } from "../controller/auth";

const router = Router();

router.post("/signup", signup);
router.get("/auth/user", authRouter, getUserInfo);
router.post("/login", login);
router.post("/logout", authRouter, logout);

export default router;
