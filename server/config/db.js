import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  if (!MONGO_URI) throw new Error("MONGO_URI not set in .env");

  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected:", mongoose.connection.host);

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected! Attempting reconnect...");
    });
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1); // Fail fast
  }
};

// graceful shutdown
export const closeDB = async () => {
  await mongoose.connection.close(false);
  console.log("MongoDB connection closed.");
};
