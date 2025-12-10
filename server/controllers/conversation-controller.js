import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

export const createConversation = async (req, res) => {
  try {
    const { receiverId } = req.body;

    if (!receiverId) {
      return res.status(400).json({ message: "Receiver ID required" });
    }

    // Check if conversation already exists (same members)
    let existingConversation = await Conversation.findOne({
      isGroup: false,
      members: { $all: [req.user._id, receiverId] },
    })
      .populate("members", "-password")
      .populate("lastMessage");

    if (existingConversation) {
      return res.json(existingConversation);
    }

    // Create new conversation
    const newConversation = await Conversation.create({
      members: [req.user._id, receiverId],
      isGroup: false,
    });

    const fullConv = await Conversation.findById(newConversation._id).populate(
      "members",
      "-password"
    );

    const member1 = global.onlineUsers.get(req.user._id.toString());
    const member2 = global.onlineUsers.get(req.body.userId.toString());

    if (member1) io.to(member1).emit("new-conversation", conversation);
    if (member2) io.to(member2).emit("new-conversation", conversation);

    res.status(201).json(fullConv);
  } catch (error) {
    console.error("Error creating conversation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createGroupConversation = async (req, res) => {
  try {
    const { name, members, groupImage } = req.body;

    if (!name || !members || members.length < 2) {
      return res
        .status(400)
        .json({ message: "Group needs name and at least 2 members" });
    }

    // Add current user to the group too
    members.push(req.user._id);

    const group = await Conversation.create({
      name,
      members,
      groupImage: groupImage || null,
      isGroup: true,
      admin: req.user._id,
    });

    const fullGroup = await Conversation.findById(group._id).populate(
      "members",
      "-password"
    );

    res.status(201).json(fullGroup);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.user._id] },
    })
      .populate("members", "-password")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const renameGroup = async (req, res) => {
  try {
    const { conversationId, name } = req.body;

    const updated = await Conversation.findByIdAndUpdate(
      conversationId,
      { name },
      { new: true }
    ).populate("members", "-password");

    res.json(updated);
  } catch (error) {
    console.error("Error renaming group:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addMember = async (req, res) => {
  try {
    const { conversationId, userId } = req.body;

    const updated = await Conversation.findByIdAndUpdate(
      conversationId,
      { $addToSet: { members: userId } },
      { new: true }
    ).populate("members", "-password");

    const socketId = global.onlineUsers.get(userId);
    if (socketId) io.to(socketId).emit("added-to-group", convo);

    res.json(updated);
  } catch (error) {
    console.error("Error adding member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeMember = async (req, res) => {
  try {
    const { conversationId, userId } = req.body;

    const updated = await Conversation.findByIdAndUpdate(
      conversationId,
      { $pull: { members: userId } },
      { new: true }
    ).populate("members", "-password");

    res.json(updated);
  } catch (error) {
    console.error("Error removing member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteConversation = async (req, res) => {
  try {
    const { id } = req.params;

    await Conversation.findByIdAndDelete(id);

    res.json({ message: "Conversation deleted successfully" });
  } catch (error) {
    console.error("Error deleting conversation:", error);
    res.status(500).json({ message: "Server error" });
  }
};
