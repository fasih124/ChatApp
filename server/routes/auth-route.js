import express from "express";
import {
  login,
  LogoutUser,
  register,
  UserInfo,
} from "../controllers/auth-controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", LogoutUser);
router.get("/userinfo", protect, UserInfo);

export default router;
