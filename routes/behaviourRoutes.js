const express = require("express");
const router = express.Router();
const cors = require("cors");
const { manageBehaviours } = require("../controllers/behaviourController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Adding, updating, and deleting a behaviour
// PUT /api/classes/students/:id/behaviour
router.put("/classes/students/:id/behaviour", manageBehaviours);

module.exports = router;