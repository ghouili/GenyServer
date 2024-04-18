const mongoose = require("mongoose");

const CompteSchema = new mongoose.Schema({
    raison_sociale: { type: String, required: true, maxlength: 128 },
    adresse: { type: mongoose.Schema.Types.ObjectId, ref: 'Adresse', default: null },
    telephone: { type: String, maxlength: 20, required: true },
    fax: { type: String, maxlength: 20, default: null },
    email: { type: String, maxlength: 254, default: null },
    langue: { type: String, maxlength: 8, default: "fr" },
    responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    categories_consultations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CategorieConsultation' }],
    distribution: {
        type: String,
        enum: ['GYNECOLOGIE', 'GENERALISTE', 'CARDIOLOGIE'],
        default: 'GYNECOLOGIE'
    }
});

const Compte = mongoose.model('Compte', CompteSchema);

module.exports = Compte;
