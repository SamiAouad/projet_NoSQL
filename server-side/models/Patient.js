const mongoose = require("mongoose")


const patientSchema = new mongoose.Schema({
    cni: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    dossierMedical: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Treatment"
    }],
    rdv: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rdv"
    }]
})

module.exports = mongoose.model("Patient", patientSchema);