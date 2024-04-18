const mongoose = require("mongoose");

const SRConsultationSchema = new mongoose.Schema({
    consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultation', required: true },
    date: { type: Date, required: true },
});

const SRConsultation = mongoose.model('SRConsultation', SRConsultationSchema);

module.exports = SRConsultation;
