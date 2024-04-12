const { Schema, model } = require('mongoose');

// Définition du schéma Prescription
const PrescriptionSchema = new Schema({
    compte: { type: Schema.Types.ObjectId, ref: 'Compte', required: true },
    libelle: { type: String, maxlength: 256, required: true },
    categorie: { type: String, maxlength: 256, default: 'examen_complementaire' },
    text: { type: String, required: true }
}, { timestamps: true });

// Définition du modèle Prescription
const Prescription = model('Prescription', PrescriptionSchema);

// Export du modèle
module.exports = Prescription;
