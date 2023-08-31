const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    PhoneNumber: String,
    Email: String,
    Password: String

});

module.exports = mongoose.model('SignUp', signSchema);