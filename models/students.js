const mongoose = require("mongoose");

const {Schema} = mongoose; 

const studentsSchema = new Schema(
    {
        firstName:{type: String},
        lastName:{type: String},
        class:{type: String},
        gender:{type: String},
        code:{type: String},
        dateBirth:{type: Date},
        placeBirth:{type: String},
        dateAdmission:{type: Date},
        address:{type: String},
        personalMobile:{type: String},
        blood:{type: String},
        fathFirstName:{type: String},
        fathLastName:{type: String},
        fathMobile:{type: String},
        mothFirstName:{type: String},
        mothLastName:{type: String},
        mothMobile:{type: String},
        attendance:[{
            date:{type: Date},
            tHours:{type: Number},
            aHours:{type: Number}
        }],
        behaviour:{type: String}
    }, 
    {
        timestamps: true
    }
)

const studentModel = mongoose.models.studentModel || mongoose.model("students", studentsSchema);

module.exports = studentModel;