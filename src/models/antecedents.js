const mongoose = require("mongoose");

const AntecedentSchema = new mongoose.Schema({
    sous_categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'SousCatgeorieAntecedent', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    text: { type: String },
    date: { type: Date }
});

module.exports = mongoose.model('Antecedent', AntecedentSchema);
