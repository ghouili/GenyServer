const mongoose = require("mongoose");

const ConsultationColposcopieSchema = new mongoose.Schema({
    indications: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    test_hpv: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    typage: { type: String, maxlength: 512, default: null },
    commentaires_1: { type: String, default: null },
    examen_sans_preparation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    commentaires_2: { type: String, default: null },
    acide_acetique: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    tag: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    localisation: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    lugol: { type: mongoose.Schema.Types.ObjectId, ref: 'ListeChoix', default: null },
    commentaires_3: { type: String, default: null },
    biopsie: { type: Boolean, default: null },
    commentaires_4: { type: String, default: null }
});

const ConsultationColposcopie = mongoose.model('ConsultationColposcopie', ConsultationColposcopieSchema);

module.exports = ConsultationColposcopie;
