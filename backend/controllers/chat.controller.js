const chatModel = require("../models/chat.model");

const createChat = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    let { id } = req.user;

    const chat = await chatModel.create({ userId: id });

    return res.status(201).json({
      success: true,
      message: "Chat created successfully",
      chat,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllChats = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { id } = req.user;

    const chats = await chatModel
      .find({ userId: id, isActive: true })
      .sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      message: "Fetched chats",
      chats,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createChat, getAllChats };
