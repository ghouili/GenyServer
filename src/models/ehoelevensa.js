const mongoose = require("mongoose");

const ConsultationEcho11SASchema = new mongoose.Schema({
    sac_gestationnel_localisation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    sac_gestationnel_tonicite: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    sac_gestationnel_trophoblaste: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    sac_gestationnel_longueur: { type: Number, default: null },
    sac_gestationnel_largeur: { type: Number, default: null },
    sac_gestationnel_hauteur: { type: Number, default: null },
    sac_gestationnel_diametre: { type: Number, default: null },
    sac_gestationnel_decollement: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    embryon_visible: { type: Boolean, default: true },
    morpho_extremite_cephalique: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_membres: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    lcc: { type: Number, default: null },
    bip: { type: Number, default: null },
    activite_cardiaque: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    commentaires: { type: String, default: null }
});

const ConsultationEcho11SA = mongoose.model('ConsultationEcho11SA', ConsultationEcho11SASchema);

module.exports = ConsultationEcho11SA;
