const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dateBirth: req.body.dateBirth,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
            school: req.body.school,
            subject: req.body.subject 
        }
        const userExist = await userModel.findOne({ email : newUser.email});
        if (userExist) {
            return res.status(500).json({ error: "This email already exists!"});
        } else {
            await userModel.create(newUser);
            res.status(200).json("A new user has been added successfully!");
        }
    } catch (error) {
        res.status(500).json({ error: "An error occured while adding a user!"});
    }
}


const loginUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign(
                    { id: user._id, email: user.email, role: user.role },
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: "1h" }
                );
                return res.status(200).json({ message: "Successfully logged in!", user: user, token: token });
            } else {
                res.status(401).json({ error: "The password is not correct!", user: false });
            }
        } else {
            res.status(404).json({ error: "No user with this email exists!" });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while logging in!" });
    }
}

module.exports = { registerUser, loginUser }