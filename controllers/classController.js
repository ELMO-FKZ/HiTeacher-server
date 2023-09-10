const classModel = require("../models/classes");
const studentModel = require("../models/students");

const getClasses = async(req, res) => {
    try {
        const data = await classModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching classes data!"});
    }
}

const addClass = async(req, res) => {
    try {
        const newClass = {
            name: req.body.name
        }
        await classModel.create(newClass);
        res.status(200).json("A new class has been added successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while adding a class!"});
    }
}

const deleteClass = async(req, res) => {
    try {
        await classModel.deleteOne({ _id: req.params.id });
        await studentModel.deleteMany({ class: req.params.name });
        res.status(200).json("A class has been deleted successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while deleting a class!"});
    }
}

const updateClass = async(req, res) => {
    try {
        await classModel.findOneAndUpdate(
            { name: req.params.name },
            { name: req.body.name },
            { new: true }
        );
        await studentModel.updateMany({ class: req.params.name }, { class: req.body.name });
        res.status(200).json("A class has been updated successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while updating a class!"});
    }
}

module.exports = { getClasses, addClass, deleteClass, updateClass }