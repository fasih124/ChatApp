let onlineUsers = new Map();

export default function socketHandler(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // ------------------------
    // 1️⃣ REGISTER USER ONLINE
    // ------------------------
    socket.on("register", (userId) => {
      onlineUsers.set(userId, socket.id);
      io.emit("online-users", Array.from(onlineUsers.keys()));
    });

    // ------------------------
    // 2️⃣ SEND MESSAGE
    // ------------------------
    socket.on("send-message", (data) => {
      const { receiverId, message } = data;

      const receiverSocket = onlineUsers.get(receiverId);

      if (receiverSocket) {
        io.to(receiverSocket).emit("receive-message", message);
      }
    });

    // ------------------------
    // 3️⃣ MESSAGE SEEN
    // ------------------------
    socket.on("message-seen", ({ conversationId, userId }) => {
      io.to(onlineUsers.get(userId)).emit("seen-update", { conversationId });
    });

    // ------------------------
    // 4️⃣ TYPING INDICATOR
    // ------------------------
    socket.on("typing", ({ to, conversationId }) => {
      const receiverSocket = onlineUsers.get(to);
      if (receiverSocket) {
        io.to(receiverSocket).emit("typing", { conversationId });
      }
    });

    socket.on("stop-typing", ({ to, conversationId }) => {
      const receiverSocket = onlineUsers.get(to);
      if (receiverSocket) {
        io.to(receiverSocket).emit("stop-typing", { conversationId });
      }
    });

    // ------------------------
    // 5️⃣ DISCONNECT HANDLER
    // ------------------------
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);

      // remove user from map
      for (let [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }

      // notify others
      io.emit("online-users", Array.from(onlineUsers.keys()));
    });
  });
}
