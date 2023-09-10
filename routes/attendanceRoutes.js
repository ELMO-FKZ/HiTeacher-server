const express = require("express");
const router = express.Router();
const cors = require("cors");
const { addAttendance, updateAttendance, deleteAttendanceDayClass, deleteAttendanceClass, clearAttendance } = require("../controllers/attendanceController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Add attendance 
// POST /api/classes/:name/students/attendance
router.post("/classes/:name/students/attendance", addAttendance);

// Update attendance 
// PUT /api/classes/students/:studentId/attendance/:attId
router.put("/classes/students/:studentId/attendance/:attId", updateAttendance);

// Delete a day record of a specific class
// DELETE /api/classes/:name/students/attendance/:attDate/option1
router.delete("/classes/:name/students/attendance/:attDate/option1", deleteAttendanceDayClass)

// Delete all records of a specific class
// DELETE /api/classes/:name/students/attendance/option2
router.delete("/classes/:name/students/attendance/option2", deleteAttendanceClass)

// Clear all records
// DELETE /api/classes/students/attendance/option3
router.delete("/classes/students/attendance/option3", clearAttendance)

module.exports = router;