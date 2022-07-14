const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Test', testSchema, 'tests');