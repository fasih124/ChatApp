import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createConversation,
  createGroupConversation,
  getUserConversations,
  renameGroup,
  addMember,
  removeMember,
  deleteConversation,
} from "../controllers/conversationController.js";

const router = express.Router();

router.get("/", protect, getUserConversations);
router.post("/create", protect, createConversation);
router.post("/group", protect, createGroupConversation);
router.put("/rename", protect, renameGroup);
router.put("/addMember", protect, addMember);
router.put("/removeMember", protect, removeMember);
router.delete("/:id", protect, deleteConversation);

export default router;
