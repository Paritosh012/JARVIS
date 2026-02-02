const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
      index: true,
    },

    sender: {
      type: String,
      enum: ["user", "jarvis"],
      required: true,
    },

    type: {
      type: String,
      enum: ["text", "system"],
      default: "text",
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Message", messageSchema);
