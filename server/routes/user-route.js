import express from "express";
import {
  getCurrentUser,
  searchUsers,
  getAllUsersExceptMe,
  updateProfile,
  updateStatus,
} from "../controllers/user-controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllUsersExceptMe);
router.get("/me", protect, getCurrentUser);
router.get("/search", protect, searchUsers);
router.put("/update", protect, updateProfile);
router.put("/status", protect, updateStatus);

export default router;
