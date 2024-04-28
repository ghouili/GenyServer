const mongoose = require("mongoose");

const PraticienSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    titre: { type: String, maxlength: 8, default: 'Dr', enum: ['Dr', 'Pr', 'Mme', 'Mlle', 'Mr'] },
    prenom: { type: String, maxlength: 128, required: true },
    nom: { type: String, maxlength: 128, required: true },
    specialite: { type: String, maxlength: 128, required: true },
    telephone: { type: String, maxlength: 20, default: null },
    email: { type: String, maxlength: 128, default: null },
    notes: { type: String, default: null }
},);

const Praticien = mongoose.model('Praticien', PraticienSchema);

module.exports = Praticien;
