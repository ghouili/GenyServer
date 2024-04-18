const mongoose = require("mongoose");

const InformationsConjointSchema = new mongoose.Schema({
    nom_conjoint: { type: String, maxlength: 256, default: null },
    prenom_conjoint: { type: String, maxlength: 256, default: null },
    date_naissance_conjoint: { type: Date, default: null },
    telephone_conjoint: { type: String, maxlength: 20, default: null },
    groupe_sanguin_conjoint: { type: String, enum: ['A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+'], maxlength: 3, default: null },
    consanguinite_conjoint: { type: String, enum: ['', 'oui', 'non'], maxlength: 256, default: '' },
    etat_sante_conjoint: { type: String, default: null },
    profession_conjoint: { type: String, maxlength: 512, default: null },
    date_mariage: { type: Date, default: null }
});

const InformationsConjoint = mongoose.model('InformationsConjoint', InformationsConjointSchema);

module.exports = InformationsConjoint;
