const studentModel = require("../models/students");

const getStudents = async(req, res) => {
    try {
        const data = await studentModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching students data!"});
    }
}

const getClassStudents = async(req, res) => {
    try {
        const data = await studentModel.find({ class: req.params.name });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching students data!"});
    }
}

const getStudent = async(req, res) => {
    try {
        const data = await studentModel.findOne({ _id: req.params.id })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching a student data!"});
    }
}

const deleteStudent = async(req, res) => {
    try {
        await studentModel.deleteOne({ _id: req.params.id });
        res.status(200).json("A student has been deleted successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while deleting a student!"});
    }
}

const updateStudent = async(req, res) => {
    try {
        await studentModel.updateOne(
            { _id: req.params.id }, 
            { 
                firstName: req.body.firstName, 
                lastName: req.body.lastName,
                class: req.body.class,
                gender: req.body.gender,
                code: req.body.code,
                dateBirth: req.body.dateBirth,
                placeBirth: req.body.placeBirth,
                dateAdmission: req.body.dateAdmission,
                address: req.body.address,
                personalMobile: req.body.personalMobile,
                blood: req.body.blood,
                fathFirstName: req.body.fathFirstName,
                fathLastName: req.body.fathLastName,
                fathMobile: req.body.fathMobile,
                mothFirstName: req.body.mothFirstName,
                mothLastName: req.body.mothLastName,
                mothMobile: req.body.mothMobile
            }
        )
        res.status(200).json("A student has been updated successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while updating a student!"});
    }
}

const addStudent = async(req, res) => {
    try {
        const newStudent = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            class: req.body.class,
            gender: req.body.gender,
            code: req.body.code,
            dateBirth: req.body.dateBirth,
            placeBirth: req.body.placeBirth,
            dateAdmission: req.body.dateAdmission,
            address: req.body.address,
            personalMobile: req.body.personalMobile,
            blood: req.body.blood,
            fathFirstName: req.body.fathFirstName,
            fathLastName: req.body.fathLastName,
            fathMobile: req.body.fathMobile,
            mothFirstName: req.body.mothFirstName,
            mothLastName: req.body.mothLastName,
            mothMobile: req.body.mothMobile,
            attendance: req.body.attendance,
            behaviour: req.body.behaviour
        }
        await studentModel.create(newStudent);
        res.status(200).json("A new student has been added successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while adding a student!"});
    }
}


module.exports = { getStudents, getClassStudents, getStudent, deleteStudent, updateStudent, addStudent }