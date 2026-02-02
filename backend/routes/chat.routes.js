const express = require("express");
const { createChat, getAllChats } = require("../controllers/chat.controller");
const checkToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", checkToken, createChat);
router.get("/", checkToken, getAllChats);

module.exports = router;
