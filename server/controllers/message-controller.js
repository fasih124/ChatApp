import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { conversationId, content, messageType } = req.body;
    let fileUrl = null;

    // If file uploaded via multer
    if (req.file) {
      fileUrl = `/uploads/${req.file.filename}`;
    }

    if (!conversationId || (!content && !fileUrl)) {
      return res.status(400).json({ message: "Missing data" });
    }

    const newMessage = await Message.create({
      sender: req.user._id,
      conversation: conversationId,
      content: content || null,
      messageType: messageType || (fileUrl ? "file" : "text"),
      fileUrl: fileUrl,
    });

    // Update lastMessage in Conversation
    await Conversation.findByIdAndUpdate(conversationId, {
      lastMessage: newMessage._id,
    });

    const fullMessage = await Message.findById(newMessage._id).populate(
      "sender",
      "-password"
    );

    res.status(201).json(fullMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await Message.find({ conversation: conversationId })
      .populate("sender", "-password")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const markAsSeen = async (req, res) => {
  try {
    const { conversationId } = req.body;

    await Message.updateMany(
      {
        conversation: conversationId,
        seenBy: { $ne: req.user._id },
      },
      { $push: { seenBy: req.user._id } }
    );

    res.json({ message: "Messages marked as seen" });
  } catch (error) {
    console.error("Error marking messages as seen:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const msg = await Message.findById(id);

    if (!msg) return res.status(404).json({ message: "Message not found" });

    if (msg.sender.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Message.findByIdAndDelete(id);

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ message: "Server error" });
  }
};
