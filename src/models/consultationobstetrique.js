const mongoose = require("mongoose");

const ConsultationObstetriqueSchema = new mongoose.Schema({
    grossesse: { type: mongoose.Schema.Types.ObjectId, ref: 'Grossesse', required: true },
    rdv_suivant_apres: { type: Date, default: null },
    rdv_suivant_avant: { type: Date, default: null },
    ip_droit: { type: Number, default: null },
    ir_droit: { type: Number, default: null },
    ip_gauche: { type: Number, default: null },
    ir_gauche: { type: Number, default: null },
    notch_droit: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    notch_gauche: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    col_long: { type: Number, default: null },
    col_entonnoir: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    col_orifice_interne: { type: Number, default: null },
    echo_morpho: { type: String, default: null },
    echo_t3: { type: String, default: null },
    seins: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    examen_sous_speculum: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    leuco: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null }],
    tv: { type: String, default: null },
    poids: { type: Number, default: null },
    ta: { type: String, default: null },
    temperature: { type: Number, default: null },
    alb: { type: String, default: null },
    gly: { type: String, default: null },
    commentaires_cliniques: { type: String, default: null },
    pelvis_maternel: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    lmc: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null }
});

const ConsultationObstetrique = mongoose.model('ConsultationObstetrique', ConsultationObstetriqueSchema);

module.exports = ConsultationObstetrique;
