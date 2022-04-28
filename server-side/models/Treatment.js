const mongoose = require("mongoose")

const PrescriptionSchema = new mongoose.Schema({
    meds: [{
        name: String,
        dose: Number,
        unit: String,
        when: String,
        duration: Number,
        description: String
    }],
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
    appointments: [{
        date: Date,
        period: String,
        urgency: String,
        description: {
            type: String,
            default: ""
        }
    }], // notes about the progress of the treatment
    symptoms: [{
        description: String,
        severity: Number
    }],
    rdv: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rdv"
    }
})


module.exports = mongoose.model("treatments", TreatmentSchema);