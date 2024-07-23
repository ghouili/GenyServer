const { Schema, model } = require('mongoose');

const WorklistItemSchema = new Schema({
    consultation: { type: Schema.Types.ObjectId, ref: 'Consultation', required: true },
    device: { type: Schema.Types.ObjectId, ref: 'Device', default: null },
    study_instance_uid: { type: String, maxlength: 256, required: true },
    requested_procedure_description: { type: String, maxlength: 256, default: null },
    requested_procedure_id: { type: String, maxlength: 256, default: null },
    mpps_status: {
        type: String,
        enum: ['PENDING', 'IN PROGRESS', 'COMPLETED', 'DISCONTINUED'],
        default: 'PENDING'
    }
});


const WorklistItem = model('WorklistItem', WorklistItemSchema);

module.exports = WorklistItem;
