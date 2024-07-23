const mongoose = require("mongoose");

const ReglementSchema = new mongoose.Schema({
    admission: { type: mongoose.Schema.Types.ObjectId, ref: 'Admission', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    praticien: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin', default: null },
    note: { type: String, default: null },
    mutuelle: { type: Boolean, default: false },
    nom_mutuelle: { type: String, maxlength: 128, default: null },
    espece_payment: { type: Number, default: null },
    cheque_payment: { type: Number, default: null },
    cb_payment: { type: Number, default: null },
    cheque_number: { type: Number, min: 0, default: null },
    titulaire: { type: String, maxlength: 128, default: null },
    date_cheque: { type: Date, default: null },
    cloture: { type: mongoose.Schema.Types.ObjectId, ref: 'Cloture', default: null },
    bordereau: { type: mongoose.Schema.Types.ObjectId, ref: 'Bordereau', default: null },
    date_creation: { type: Date, default: Date.now }
});


const Reglement = mongoose.model('Reglement', ReglementSchema);

module.exports = Reglement;
