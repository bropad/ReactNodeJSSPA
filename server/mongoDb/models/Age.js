//Import the mongoose module
const mongoose = require('mongoose');


const AgeShema = mongoose.Schema({
    name: String,
    from: Number,
    to: Number,
    style: String
});

let Age = mongoose.model('test', AgeShema);

module.exports = Age;