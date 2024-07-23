const mongoose = require("mongoose");

const TentativePMASchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    praticien: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin', default: null },
    text: { type: String, default: '', trim: true },
    rang: { type: Number, min: 0, default: null },
    encours: { type: Boolean, default: true },
    diagnostic: { type: String, maxlength: 512, default: null },
    remarques_tentatives: { type: String, maxlength: 512, default: null },
    pretraitement: { type: String, maxlength: 512, default: null },
    protocole: { type: String, maxlength: 512, default: null },
    reussie: { type: Boolean, default: false },
    commentaires: { type: String, default: '', trim: true }
});

const TentativePMA = mongoose.model('TentativePMA', TentativePMASchema);

module.exports = TentativePMA;
