const mongoose = require('mongoose');
const { type } = require('os');

const signinSchema = mongoose.Schema({
    username : String,
    password : String
});

module.exports = mongoose.model('signin',signinSchema);