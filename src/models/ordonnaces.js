const { Schema, model } = require('mongoose');

// Définition du schéma Ordonnance
const OrdonnanceSchema = new Schema({
    date: { type: Date, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'TypeOrdonnance' },
    text: { type: String, required: true },
    praticien: { type: Schema.Types.ObjectId, ref: 'Medecin' },
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }
}, { timestamps: true });

// Définition du modèle Ordonnance
const Ordonnance = model('Ordonnance', OrdonnanceSchema);

// Export du modèle
module.exports = Ordonnance;
