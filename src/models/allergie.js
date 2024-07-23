const mongoose = require("mongoose");

const AllergieSchema = new mongoose.Schema({
    nomallergie: { type: Number, default: null },
    note: { type: String, maxlength: 128, default: null },
    
});


const Allergie = mongoose.model('Allergie', AllergieSchema);

module.exports = Allergie;
