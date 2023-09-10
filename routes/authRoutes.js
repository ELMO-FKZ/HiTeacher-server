const express = require("express");
const router = express.Router();
const cors = require("cors");
const { loginUser, registerUser } = require("../controllers/authController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Register 
// POST /api/register
router.post("/register", registerUser);

// Login 
// POST /api/login
router.post("/login", loginUser);

module.exports = router; 