//Import the mongoose module
const mongoose = require('mongoose');


const TestShema = mongoose.Schema({
    name: String
});

let Test = mongoose.model('test', TestShema);

module.exports = Test;