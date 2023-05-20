import { Router } from "express";

import { signup, getUserInfo, login, logout } from "../controller/auth";

const router = Router();

router.post("/signup", signup);
router.get("/auth", getUserInfo);
router.post("/login", login);
router.post("/logout", logout);

export default router;
