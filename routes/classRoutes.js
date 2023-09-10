const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getClasses, addClass, deleteClass, updateClass} = require("../controllers/classController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Get all classes
// GET /api/classes
router.get("/classes/getClasses", getClasses);

// Add a class
// POST /api/classes
router.post("/classes/addClass", addClass)

// Delete a class
// DELETE /api/classes/:id
router.delete("/classes/:id/:name/deleteClass", deleteClass)

// Update a class
// PUT /api/classes/:name
router.put("/classes/:name/updateClass", updateClass)

module.exports = router;