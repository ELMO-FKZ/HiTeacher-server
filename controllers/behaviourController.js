const studentModel = require("../models/students");

const manageBehaviours = async(req, res) => {
    try {

        await studentModel.updateOne(
            { _id: req.params.id }, 
            { behaviour: req.body.behaviour }
        )
        res.status(200).json("A student's behaviour has been updated successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while updating a student's behaviour!"});
    }
}

module.exports = { manageBehaviours }