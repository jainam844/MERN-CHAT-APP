import express from "express";
import { singup } from "../controller/auth.controller.js";
import { login, logout } from './../controller/auth.controller.js';
const router = express.Router();

router.post("/login", login);
router.post("/signup", singup);
router.post("/logout", logout);


export default router;
