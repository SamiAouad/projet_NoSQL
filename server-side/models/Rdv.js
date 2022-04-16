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
        type: Boolean,
        default: () => false
    },
    date: Date
})



module.exports = mongoose.model("Rdv", RdvSchema);