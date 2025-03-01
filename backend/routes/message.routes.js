import express from "express";
import { sendMessage } from "../controller/message.controller.js";
import porotectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", porotectRoute, sendMessage);


export default router;
