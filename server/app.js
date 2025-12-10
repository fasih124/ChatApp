import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { closeDB, connectDB } from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
import socketHandler from "./socket/socketHandler.js";

import authRoutes from "./routes/auth-route.js";
import conversationRoutes from "./routes/conversation-route.js";
import userRoutes from "./routes/user-route.js";
import messageRoutes from "./routes/message-route.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(errorHandler);

// connect DB
await connectDB(); // await closeDB();

// route middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/message", messageRoutes);

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
