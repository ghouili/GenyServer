const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    civilite: { type: String, enum: ['mme', 'mlle', 'mr'], default: 'mme' },
    prenom: { type: String, required: true },
    nom: { type: String },
    nom_naissance: { type: String },
    sexe: { type: String, enum: ['F', 'H'], default: 'F' },
    date_naissance: { type: Date, required: true },
    numero_identite: { type: String },
    code_securite_sociale: { type: String },
    adresse: { type: mongoose.Schema.Types.ObjectId, ref: 'Adresse' },
    email: { type: String },
    telephone: { type: String },
    telephone_secondaire: { type: String },
    telephone_autre: { type: String },
    profession: { type: String },
    observation: { type: String },
    taille: { type: Number },
    poids: { type: Number },
    groupe_sanguin: { type: String, enum: ['A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+'] },
    fumeur: { type: Boolean, default: false },
    nombre_cigarettes: { type: Number },
    origine: { type: String, enum: ['1', '2', '3', '4', '10'] },
    antecedents_familiaux: { type: String },
    antecedents_medico_chirurgicaux: { type: String },
    antecedents_gynecologiques: { type: String },
    antecedents_cardio: { type: String },
    allergies: { type: String },
    praticien_principal: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin' },
    praticiens_correspondants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Praticien' }],
    lieu_accouchement: { type: mongoose.Schema.Types.ObjectId, ref: 'Etablissement' },
    mot_cle: { type: String },
    notes: { type: String, default: '' },
    nouveau: { type: Boolean, default: true }
});

module.exports = mongoose.model('Patient', PatientSchema);
