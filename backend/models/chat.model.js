const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, 
      index: true,
    },

    title: {
      type: String,
      default: "New Chat",
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    endedAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

chatSchema.index({ userId: 1, isActive: 1 });

module.exports = mongoose.model("Chat", chatSchema);
