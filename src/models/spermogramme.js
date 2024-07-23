const mongoose = require("mongoose");

const SpermogrammePMASchema = new mongoose.Schema({
    interrogatoire: { type: mongoose.Schema.Types.ObjectId, ref: 'InterrogatoirePMA', required: true },
    date: { type: Date, default: null },
    vol: { type: String, maxlength: 512, default: null },
    num: { type: String, maxlength: 512, default: null },
    mob: { type: String, maxlength: 512, default: null },
    vit: { type: String, maxlength: 512, default: null },
    ft: { type: String, maxlength: 512, default: null },
    leuco: { type: String, maxlength: 512, default: null },
    agg: { type: String, maxlength: 512, default: null },
    tms: { type: String, maxlength: 512, default: null }
});

const SpermogrammePMA = mongoose.model('SpermogrammePMA', SpermogrammePMASchema);

module.exports = SpermogrammePMA;
