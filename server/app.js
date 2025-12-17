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
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// connect DB
await connectDB(); // await closeDB();

// route middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/message", messageRoutes);

socketHandler(io);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
