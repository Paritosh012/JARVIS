const chatModel = require("../models/chat.model");
const messageModel = require("../models/message.model");

const createMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Message content is required",
      });
    }

    const chat = await chatModel.findOne({
      _id: chatId,
      userId: userId,
      isActive: true,
    });

    if (!chat)
      return res.status(404).json({
        success: false,
        message: "Chat not found or access denied",
      });

    const message = await messageModel.create({
      chatId: chatId,
      sender: userId,
      content: content,
    });

    res.status(201).json({ success: true, data: message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user.id;

    const chat = await chatModel.findOne({
      _id: chatId,
      userId: userId,
      isActive: true,
    });

    if (!chat)
      return res.status(404).json({
        success: false,
        message: "Chat not found or access denied",
      });

    const messages = await messageModel
      .find({
        chatId: chatId,
      })
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createMessages, getMessages };
