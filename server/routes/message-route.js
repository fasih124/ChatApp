import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import {
  sendMessage,
  getMessages,
  markAsSeen,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", protect, upload.single("file"), sendMessage);
router.get("/:conversationId", protect, getMessages);
router.put("/seen", protect, markAsSeen);
router.delete("/:id", protect, deleteMessage);

export default router;
