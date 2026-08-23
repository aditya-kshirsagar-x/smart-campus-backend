const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Faculty name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    department: {
        type: String,
        required: [true, 'Department is required']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Faculty', facultySchema);