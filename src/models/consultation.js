const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
    motif: { type: mongoose.Schema.Types.ObjectId, ref: 'MotifConsultation', required: true },
    text: { type: String, default: '' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    date: { type: Date, default: Date.now },
    praticien: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin' },
    conclusion: { type: String, default: '' },
    conduite: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Consultation', ConsultationSchema);
