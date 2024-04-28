const mongoose = require("mongoose");

const TraitementPMASchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    libelle: { type: String, maxlength: 512, default: null }
});

const TraitementPMA = mongoose.model('TraitementPMA', TraitementPMASchema);

module.exports = TraitementPMA;
