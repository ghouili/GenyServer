const mongoose = require("mongoose");

const DonneesFoetusSchema = new mongoose.Schema({
    consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'ConsultationObstetrique', required: true },
    presentation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    activite_cardiaque: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    mobilite: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    poids: { type: Number, default: null },
    lcc: { type: Number, default: null },
    dat: { type: Number, default: null },
    cn: { type: Number, default: null },
    fc: { type: Number, default: null },
    bip: { type: Number, default: null },
    pc: { type: Number, default: null },
    pa: { type: Number, default: null },
    femur: { type: Number, default: null },
    bassinet_droit: { type: Number, default: null },
    bassinet_gauche: { type: Number, default: null },
    cc: { type: Number, default: null },
    cervelet: { type: Number, default: null },
    cubitus: { type: Number, default: null },
    dio: { type: Number, default: null },
    epn: { type: Number, default: null },
    humerus: { type: Number, default: null },
    opn: { type: Number, default: null },
    opn_presence: { type: String, default: null, enum: ['Absent', 'Présent'] },
    oreille: { type: Number, default: null },
    perone: { type: Number, default: null },
    pied: { type: Number, default: null },
    placenta: { type: Number, default: null },
    radius: { type: Number, default: null },
    rein_droite: { type: Number, default: null },
    rein_gauche: { type: Number, default: null },
    thyroide: { type: Number, default: null },
    tibia: { type: Number, default: null },
    vl: { type: Number, default: null },
    poids_estime: { type: Number, default: null },
    doppler_cordon_ip: { type: Number, default: null },
    doppler_cordon_ir: { type: Number, default: null },
    doppler_cordon_diastole: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    doppler_acm_ip: { type: Number, default: null },
    doppler_acm_ir: { type: Number, default: null },
    doppler_acm_vitesse: { type: Number, default: null },
    doppler_acm_mom: { type: Number, default: null },
    doppler_dv_ip: { type: Number, default: null },
    doppler_dv_ir: { type: Number, default: null },
    doppler_dv_onde: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_crane: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_struct: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_face: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_thorax: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_coeur: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_pole_cepha: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_abdo: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_digest: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_urine: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_rachis: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_membres: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_oge: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    annexe_liquide_amnio: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_liquide_amnio: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_trophoblaste_localisation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_trophoblaste_aspect: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_decol: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_placenta: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_cordon: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    morpho_cou: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    commentaires: { type: String, default: null }
});

const DonneesFoetus = mongoose.model('DonneesFoetus', DonneesFoetusSchema);

module.exports = DonneesFoetus;
