const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    
    Email: String,
    Password: String
});

module.exports = mongoose.model('Note', noteSchema);