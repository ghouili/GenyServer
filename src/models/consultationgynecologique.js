const mongoose = require("mongoose");

const ConsultationGynecologiqueSchema = new mongoose.Schema({
    motif_consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    motif_autre: { type: String, maxlength: 512, default: null },
    age_menarche: { type: Number, default: null },
    cycles: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    duree: { type: Number, default: null },
    abondance: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    douleur: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    syndrome_premenstruel: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    ddr: { type: Date, default: null },
    presence_rapports_sexuels: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    partenaire: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    age_premier_rapport: { type: Number, default: null },
    mode_contraception: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    commentaire_contraception: { type: String, maxlength: 512, default: null },
    observance: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    satisfaction: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    ths: { type: Boolean, default: null },
    bouffees_chaleur: { type: Boolean, default: null },
    incontinence: { type: Boolean, default: null },
    sensation_pesanteur: { type: Boolean, default: null },
    dyspareunies: { type: Boolean, default: null },
    commentaire: { type: String, default: null },
    endometriose: { type: Boolean, default: null },
    seins: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    examen_sous_speculum: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    leuco: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix' }],
    tv: { type: String, maxlength: 512, default: null },
    poids: { type: Number, default: null },
    ta: { type: String, maxlength: 256, default: null },
    temperature: { type: Number, default: null },
    alb: { type: String, maxlength: 256, default: null },
    gly: { type: String, maxlength: 256, default: null },
    commentaires_cliniques: { type: String, default: null },
    examens: { type: String, default: null },
    traitements: { type: String, default: null },
    observations: { type: String, default: null },
    effets_indesirables: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
   
});

const ConsultationGynecologique = mongoose.model('ConsultationGynecologique', ConsultationGynecologiqueSchema);

module.exports = ConsultationGynecologique;
