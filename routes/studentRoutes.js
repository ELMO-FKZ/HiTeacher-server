const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getStudents, getClassStudents, getStudent, deleteStudent, updateStudent, addStudent } = require("../controllers/studentController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Get all students
// GET /api/classes/students
router.get("/classes/students/getStudents", getStudents);

// Get students of one class
// GET /api/classes/:name/students
router.get("/classes/:name/students/getClassStudents", getClassStudents);

// Get one student
// GET /api/classes/students/:id
router.get("/classes/students/:id/getStudent", getStudent);

// Delete one student
// DELETE /api/classes/students/:id
router.delete("/classes/students/:id/deleteStudent", deleteStudent)

// Update one student
// PUT /api/classes/students/:id
router.put("/classes/students/:id/updateStudent", updateStudent)

// Add one student
// POST /api/classes/:id/students
router.post("/classes/students/addStudent", addStudent)

module.exports = router;