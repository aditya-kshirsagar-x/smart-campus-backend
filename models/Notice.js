const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Notice title is required']
    },
    description: {
        type: String,
        required: [true, 'Notice description is required']
    },
    postedBy: {
        type: String,
        required: [true, 'Author/Admin name is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notice', noticeSchema);