const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    semester:{
        type: String,
        required: true,
        default: 1
    }
})

module.exports = mongoose.model('Student',studentSchema)