require("dotenv").config();
const express = require("express");
const connectDB = require("./connectDB");
const compression = require('compression');
const cors = require("cors");

// Routes
const authRoutes = require("./routes/authRoutes");
const classRoutes = require("./routes/classRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const behaviourRoutes = require("./routes/behaviourRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.urlencoded( {extended: true} ));

// middleware
app.use(express.json());
// app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(cors({origin: 'https://classroom-kolz.onrender.com', credentials: true}));

// Copression
app.use(compression());

// APIs
app.use("/api", authRoutes) 
app.use("/api", classRoutes)
app.use("/api", studentRoutes)
app.use("/api", attendanceRoutes)
app.use("/api", behaviourRoutes) 

app.use("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});