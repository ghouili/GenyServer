const mongoose = require("mongoose");

const BilanEndocrinienPMASchema = new mongoose.Schema({
    date: { type: Date, default: null },
    fsh: { type: String, maxlength: 512, default: null },
    lh: { type: String, maxlength: 512, default: null },
    prolactine: { type: String, maxlength: 512, default: null },
    e2: { type: String, maxlength: 512, default: null },
    inhibine: { type: String, maxlength: 512, default: null },
    amh: { type: String, maxlength: 512, default: null },
    testosterone: { type: String, maxlength: 512, default: null },
    spermoculture: { type: String, maxlength: 512, default: null },
    biochoimie: { type: String, maxlength: 512, default: null },
    cytogen: { type: String, maxlength: 512, default: null },
    autres: { type: String, maxlength: 512, default: null }
});

const BilanEndocrinienPMA = mongoose.model('BilanEndocrinienPMA', BilanEndocrinienPMASchema);

module.exports = BilanEndocrinienPMA;
