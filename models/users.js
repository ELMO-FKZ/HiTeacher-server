const mongoose = require("mongoose");

const {Schema} = mongoose;

const usersSchema = new Schema(
    {
        firstName:{type: String},
        lastName:{type: String},
        dateBirth:{type: Date},
        gender:{type: String},
        email:{type: String, unique: true},
        password:{type: String},
        role:{type: String, default: "Visitor"},
        school:{type: String},
        subject:{type: String}
    }, 
    {
        timestamps: true
    }
)

const userModel = mongoose.models.userModel || mongoose.model("users", usersSchema);

module.exports = userModel;