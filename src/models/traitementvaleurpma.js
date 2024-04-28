const mongoose = require("mongoose");

const TraitementValeurPMASchema = new mongoose.Schema({
    valeur: { type: String, maxlength: 512, default: null },
    traitement: { type: mongoose.Schema.Types.ObjectId, ref: 'TraitementPMA', default: null },
    suivi: { type: mongoose.Schema.Types.ObjectId, ref: 'SuiviTraitementPMA', required: true },
    rang: { type: Number, min: 0, default: null }
});


const TraitementValeurPMA = mongoose.model('TraitementValeurPMA', TraitementValeurPMASchema);

module.exports = TraitementValeurPMA;
