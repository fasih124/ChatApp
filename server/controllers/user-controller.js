import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    console.error("Error fetching current user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({ message: "Search query missing" });
    }

    const users = await User.find({
      _id: { $ne: req.user._id }, // exclude logged-in user
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
      ],
    }).select("-password");

    res.json(users);
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllUsersExceptMe = async (req, res) => {
  try {
    const users = await User.find({
      _id: { $ne: req.user._id },
    }).select("-password");

    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, avatar, darkMode } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        ...(name && { name }),
        ...(avatar && { avatar }),
        ...(darkMode !== undefined && { darkMode }),
      },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["online", "offline", "busy", "away"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { status },
      { new: true }
    ).select("-password");

    res.json({ message: "Status updated", user });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Server error" });
  }
};
