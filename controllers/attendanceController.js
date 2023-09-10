const studentModel = require("../models/students");

const addAttendance = async(req, res) => {
    try {
        const data = await studentModel.find({ class: req.params.name })
        data.forEach(async(student) => {
            student.attendance.push({date: req.body.date, tHours: req.body.tHours, aHours: req.body[`${student._id}`]})
            await student.save();
        })
        res.status(200).json("A new attendance record has been added successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while adding an attendance record!"});
    }
}

const updateAttendance = async(req, res) => {
    try {
        const data = await studentModel.findOne({
            _id: req.params.studentId,
            "attendance._id": req.params.attId
        })
        data.attendance.id(req.params.attId).tHours = req.body.tHours;
        data.attendance.id(req.params.attId).aHours = req.body.aHours
        await data.save();
        res.status(200).json("A new attendance record has been updated successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while looking for an attendance record!"});
    }
}

const deleteAttendanceDayClass = async(req, res) => {
    try {
        await studentModel.updateMany(
            { class:  req.params.name },
            { $pull: { attendance: { date:  req.params.attDate } } }
        );
        res.status(200).json("A day record of a specific class has been deleted successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while deleting a day record of a specific class!"});
    }
}

const deleteAttendanceClass = async(req, res) => {
    try {
        await studentModel.updateMany(
            { class:  req.params.name },
            { $set: { attendance: [] } }
        );
        res.status(200).json("All records of specific class have been deleted successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while deleting all records of a specific class!"});
    }
}

const clearAttendance = async(req, res) => {
    try {
        await studentModel.updateMany(
            {},
            { $set: { attendance: [] } }
        );
        res.status(200).json("Attendance cleared successfully for all classes!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while clearing attendance for all classes!"});
    }
}


module.exports = { addAttendance, updateAttendance, deleteAttendanceDayClass, deleteAttendanceClass, clearAttendance }