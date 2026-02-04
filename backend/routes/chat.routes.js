const express = require("express");
const { createChat, getAllChats } = require("../controllers/chat.controller");
const checkToken = require("../middlewares/authMiddleware");
const {
  createMessages,
  getMessages,
} = require("../controllers/message.controller");
const router = express.Router();

// Chat Routes
router.post("/", checkToken, createChat);
router.get("/", checkToken, getAllChats);

// Message Routes
router.post("/:chatId/messages", checkToken, createMessages);
router.get("/:chatId/messages", checkToken, getMessages);

module.exports = router;
