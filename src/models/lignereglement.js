const mongoose = require("mongoose");

const LigneReglementSchema = new mongoose.Schema({
    prestation: { type: String, maxlength: 128, default: null },
    code: { type: String, maxlength: 128, default: null },
    prix_ttc: { type: Number, default: null },
    prix_initial: { type: Number, default: null },
    reglement: { type: mongoose.Schema.Types.ObjectId, ref: 'Reglement', required: true }
});

const LigneReglement = mongoose.model('LigneReglement', LigneReglementSchema);

module.exports = LigneReglement;
