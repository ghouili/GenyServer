const mongoose = require("mongoose");

const TentativesHistoriquesPMASchema = new mongoose.Schema({
    interrogatoire: { type: mongoose.Schema.Types.ObjectId, ref: 'InterrogatoirePMA', required: true },
    date: { type: Date, default: null },
    acte: { type: String, enum: ['IAC', 'FIV', 'DPI'], default: null },
    resultat: { type: String, enum: ['Succès', 'Echec'], default: null },
    remarques: { type: String, maxlength: 512, default: null }
});

const TentativesHistoriquesPMA = mongoose.model('TentativesHistoriquesPMA', TentativesHistoriquesPMASchema);

module.exports = TentativesHistoriquesPMA;
