const mongoose = require('mongoose');

const ResultatAnalyseBiologiqueSchema = new mongoose.Schema({
    analyse: { type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique', required: true },
    prescription: { type: mongoose.Schema.Types.ObjectId, ref: 'PrescriptionAnalyseBiologique', required: true },
    date: { type: Date, default: null },
    valeur: { type: String, default: null },
    observation: { type: String, default: null },
    valeur_anormale: { type: Boolean, default: false }
});



const ResultatAnalyseBiologique = mongoose.model('ResultatAnalyseBiologique', ResultatAnalyseBiologiqueSchema);


module.exports = ResultatAnalyseBiologique;
