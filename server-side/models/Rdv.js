const mongoose = require("mongoose")

const RdvSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    urgent: {
        type: Number,
        default: () => false
    },
    date: Date,
    period: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    },
    fiche: {
        state: String,
        disease: Boolean,
        consumption: String
    }
}, {strict: false})


module.exports = mongoose.model("Rdv", RdvSchema);