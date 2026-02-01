const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  me,
} = require("../controllers/auth.controller.js");
const checkToken = require("../middlewares/authMiddleware.js");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me", checkToken, me);

module.exports = router;
