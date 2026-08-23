const Student = require('../models/Student');

const registerStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json({
            status: "success",
            message: "Student registered successfully in Smart Campus!",
            data: savedStudent
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ status: "success", count: students.length, data: students });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { registerStudent, getStudents };