const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController");

// Register 
// POST /api/register
router.post("/register", registerUser);

// Login 
// POST /api/login
router.post("/login", loginUser);

module.exports = router; 