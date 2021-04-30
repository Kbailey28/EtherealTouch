const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = Email = mongoose.model('email', EmailSchema);