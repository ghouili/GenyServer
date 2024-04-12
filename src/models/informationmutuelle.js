const { Schema, model } = require('mongoose');

// Définition du schéma InformationsMutuelle
const InformationsMutuelleSchema = new Schema({
    mutuelle: { type: Boolean, default: false },
    designation: { type: String, maxlength: 128, default: 'CNAM' },
    caisse_affectation: { type: String, maxlength: 128, default: '1', enum: ['1', '2'], default: '1' },
    regime: { type: String, maxlength: 128, default: '1', enum: ['1', '2', '3'], default: '1' },
    lien_parente: { type: String, maxlength: 128, default: '1', enum: ['1', '2', '3', '4', '5'], default: '1' },
    num_carnet_soin: { type: String, maxlength: 10, default: '', trim: true },
    code_medecin_famille: { type: String, maxlength: 128, default: '', trim: true },
    date_validite_mutuelle: { type: Date, default: null },
    code_apci: { type: String, maxlength: 128, default: '', trim: true }
}, { timestamps: true });

// Définition du modèle InformationsMutuelle
const InformationsMutuelle = model('InformationsMutuelle', InformationsMutuelleSchema);

// Export du modèle
module.exports = InformationsMutuelle;
