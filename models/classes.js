const mongoose = require("mongoose");

const {Schema} = mongoose; 

const classesSchema = new Schema(
    {
        name:{type: String, required: true},
    }, 
    {
        timestamps: true
    }
)

const classModel = mongoose.models.classModel || mongoose.model("classes", classesSchema);

module.exports = classModel;