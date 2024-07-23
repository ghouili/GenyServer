const mongoose = require("mongoose");

const MyomeSchema = new mongoose.Schema({
    consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultation', required: true },
    situation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    type_figo: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    situation_coupe_longitudinale: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    situation_coupe_transversale: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    contours: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    structure: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    calcifications: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    vascularisation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    longueur: { type: Number, default: null },
    largeur: { type: Number, default: null },
    hauteur: { type: Number, default: null },
    diametre_moyen: { type: Number, default: null },
    volume: { type: Number, default: null },
    mure_posterieur: { type: Number, default: null }
}, { timestamps: false });

const Myome = mongoose.model('Myome', MyomeSchema);

module.exports = Myome;
