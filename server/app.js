import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { closeDB, connectDB } from "./config/db.js";

import authRoutes from "./routes/auth-route.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
await connectDB(); // await closeDB();

// route middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
