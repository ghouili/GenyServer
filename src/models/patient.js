const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    compte: { type: String, required: true },
    civilite: { type: String, default: 'mme' },
    prenom: { type: String, required: true },
    nom: { type: String },
    nom_naissance: { type: String },
    sexe: { type: String, default: 'Femme' },
    date_naissance: { type: Date, required: true },
    numero_identite: { type: String },
    code_securite_sociale: { type: String },
    adresse: { type: String },
    email: { type: String },
    telephone: { type: String },
    telephone_secondaire: { type: String },
    telephone_autre: { type: String },
    profession: { type: String },
    observation: { type: String },
    taille: { type: Number },
    poids: { type: Number },
    groupe_sanguin: { type: String, },
    fumeur: { type: Boolean, default: false },
    nombre_cigarettes: { type: Number },
    origine: { type: String,  },
    antecedents_familiaux: { type: String },
    antecedents_medico_chirurgicaux: { type: String },
    antecedents_gynecologiques: { type: String },
    antecedents_cardio: { type: String },
    allergies: { type: String },
    praticien_principal: { type: String },
    praticiens_correspondants: [{ type: String }],
    lieu_accouchement: { type: String },
    mot_cle: { type: String },
    notes: { type: String, default: '' },
    nouveau: { type: Boolean, default: true }
});

module.exports = mongoose.model('Patient', PatientSchema);
