import express from "express";
import { authcontroller } from "../controllers/auth-controller.js";
const router = express.Router();

router.get("/", authcontroller);

export default router;
