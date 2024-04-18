const mongoose = require("mongoose");

const ParametresCompteSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    timezone: { type: String, maxlength: 128, default: null },
    duree_rdv_defaut: { type: Number, default: null },
    praticien_defaut: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin', default: null },
    antecedents_familiaux_defaut: { type: String, default: null },
    antecedents_medico_chirurgicaux_defaut: { type: String, default: null },
    antecedents_gynecologiques_defaut: { type: String, default: null },
    logo: { type: String, default: null }, 
    logo_a4: { type: String, default: null }, 
    footer: { type: String, default: null }, 
    footer_a4: { type: String, default: null }, 
    nom_entete: { type: String, default: null },
    marge_entete: { type: Number, default: 100 },
    marge_footer: { type: Number, default: 80 },
    marge_gauche: { type: Number, default: 20 },
    marge_droite: { type: Number, default: 20 },
    ajouter_antecedents_edition: { type: Boolean, default: false },
    ajouter_entetes_edition: { type: Boolean, default: true },
    ajouter_entete_ord: { type: Boolean, default: true },
    ajouter_entete_cert_med: { type: Boolean, default: true },
    ajouter_entete_cert_pres: { type: Boolean, default: true },
    ajouter_entete_lettre_acc: { type: Boolean, default: true },
    ajouter_entete_prescr_bio: { type: Boolean, default: true },
    ajouter_entete_lettre_confidentielle: { type: Boolean, default: true },
    ajouter_entete_attestation_grossesse: { type: Boolean, default: true },
    ajouter_entete_lettre_fittofly: { type: Boolean, default: true },
    ajouter_date_courriers: { type: Boolean, default: true },
    ajouter_date_cro: { type: Boolean, default: true },
    duree_gross_sa: { type: Number, default: 40 },
    duree_gross_j: { type: Number, default: 3 },
    gross_echo_datation_sa_1: { type: Number, default: 7 },
    gross_echo_datation_j_1: { type: Number, default: 0 },
 });

const ParametresCompte = mongoose.model('ParametresCompte', ParametresCompteSchema);

module.exports = ParametresCompte;
