const Notice = require('../models/Notice');

const addNotice = async (req, res) => {
    try {
        const newNotice = new Notice(req.body);
        const savedNotice = await newNotice.save();
        res.status(201).json({
            status: "success",
            message: "Notice published successfully!",
            data: savedNotice
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.status(200).json({ status: "success", count: notices.length, data: notices });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { addNotice, getNotices };