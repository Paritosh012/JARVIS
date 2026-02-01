const initializeSocket = (io) => {
  console.log("initializeSocket called"); // 🔴 MUST PRINT

  io.on("connection", (socket) => {
    console.log("🔥 Socket connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
};

module.exports = initializeSocket;
  