const mongoose = require("mongoose")

const testSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    laboratoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Laboratory"
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    type: String,
    urgent: {
        type: Boolean,
        default: () => false
    },
    sample: String,
    duration: Number,
    results: mongoose.Schema.Types.Mixed,
    photo: {
        data: Buffer,
        contentType: String
    },
})



module.exports = mongoose.model("Test", testSchema);