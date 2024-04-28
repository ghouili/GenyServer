const mongoose = require("mongoose");

const CollectionAnalyseBiologiqueSchema = new mongoose.Schema({
    compte: { type: mongoose.Schema.Types.ObjectId, ref: 'Compte', required: true },
    nom: { type: String, maxlength: 128, required: true },
    analyses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AnalyseBiologique' }]
},);


const CollectionAnalyseBiologique = mongoose.model('CollectionAnalyseBiologique', CollectionAnalyseBiologiqueSchema);

module.exports = CollectionAnalyseBiologique;
