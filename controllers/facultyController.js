const Faculty = require('../models/Faculty');

const addFaculty = async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        const savedFaculty = await newFaculty.save();
        res.status(201).json({
            status: "success",
            message: "Faculty registered successfully!",
            data: savedFaculty
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

const getFaculty = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json({ status: "success", count: faculties.length, data: faculties });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { addFaculty, getFaculty };