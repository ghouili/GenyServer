const mongoose = require("mongoose");

const PrescriptionAnalyseBiologiqueSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    analyses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique', required: true }],
    date_prescription: { type: Date, required: true },
    date_resultat: { type: Date, default: null }
});



const PrescriptionAnalyseBiologique = mongoose.model('PrescriptionAnalyseBiologique', PrescriptionAnalyseBiologiqueSchema);

module.exports = PrescriptionAnalyseBiologique;
