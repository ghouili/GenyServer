const mongoose = require("mongoose");

const RdvSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    debut: { type: Date, required: true },
    fin: { type: Date, required: true },
    ancien_debut: { type: Date },
    prenom: { type: String, required: true, maxlength: 128 },
    nom: { type: String, maxlength: 128 },
    nom_naissance: { type: String, maxlength: 128 },
    telephone: { type: String, maxlength: 20 },
    cp: { type: Number },
    ville: { type: String, maxlength: 128 },
    gouvernorat: { type: String, maxlength: 128 },
    motif: { type: mongoose.Schema.Types.ObjectId, ref: 'MotifRdv', required: true },
    nouveau: { type: Boolean, default: true },
    observation: { type: String, maxlength: 256 },
    praticien: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin' },
    statut: { type: String, default: '1', enum: ['1', '2', '3', '10'] },
    motif_modification: { type: String, maxlength: 128 },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    patient_rappele: { type: Boolean, default: false }
});

module.exports = mongoose.model('Rdv', RdvSchema);
