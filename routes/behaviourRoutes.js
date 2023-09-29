const express = require("express");
const router = express.Router();
const { manageBehaviours } = require("../controllers/behaviourController");

// Adding, updating, and deleting a behaviour
// PUT /api/classes/students/:id/behaviour
router.put("/classes/students/:id/behaviour", manageBehaviours);

module.exports = router;