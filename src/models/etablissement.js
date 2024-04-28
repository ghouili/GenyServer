const mongoose = require("mongoose");

const EtablissementSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    nom: { type: String, maxlength: 128, required: true },
    telephone: { type: String, maxlength: 20, default: null }
});

const Etablissement = mongoose.model('Etablissement', EtablissementSchema);

module.exports = Etablissement;
