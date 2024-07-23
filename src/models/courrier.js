const mongoose = require("mongoose");

const CourrierSchema = new mongoose.Schema({
    title: {type: String, require: true, unique: true},
    cin: {type: String, require: true, unique: true},
});
module.exports = mongoose.model('courrier',  CourrierSchema);