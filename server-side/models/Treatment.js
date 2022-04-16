const mongoose = require("mongoose")

const PrescriptionSchema = new mongoose.Schema({
    meds: {
        name: String,
        dose: Number,
        unit: String,
        when: String,
        duration: Number,
        description: String
    },
    photo: {
        data: Buffer,
        contentType: String
    }
})

const TreatmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    prescription: PrescriptionSchema,
    tests: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test"
    },
    description: String,
    symptoms: [{
        description: String,
        severity: Number
    }]
})


module.exports = mongoose.model("Treatment", TreatmentSchema);