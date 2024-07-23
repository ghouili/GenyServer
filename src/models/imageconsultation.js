const mongoose = require("mongoose");

const ImageConsultationSchema = new mongoose.Schema({
    image: { type: String, required: true },
    type: { type: String, enum: ['G', 'E'], required: true },
    consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultation', required: true },
    date: { type: Date, required: true },
    impression: { type: Boolean, default: false }
});

const ImageConsultation = mongoose.model('ImageConsultation', ImageConsultationSchema);

module.exports = ImageConsultation;
