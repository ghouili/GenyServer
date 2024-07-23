const mongoose = require("mongoose");



const TemplateEditionSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    categorie_consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'CategorieConsultation', required: true },
    motif_consultation: { type: mongoose.Schema.Types.ObjectId, ref: 'MotifConsultation', default: null },
    libelle: { type: String, maxlength: 256, required: true },
    contenu: { type: String, default: '', required: true }
});





module.exports = mongoose.model('TemplateEdition', TemplateEditionSchema);
