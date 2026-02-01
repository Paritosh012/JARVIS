const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const socketio = require("socket.io");
const connectDB = require("./config/db");
// const initializeSocket = require("./socket");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

// const io = socketio(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//   },
// });

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

// initializeSocket(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
