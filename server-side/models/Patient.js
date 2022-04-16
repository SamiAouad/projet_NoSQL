const mongoose = require("mongoose")


const patientSchema = new mongoose.Schema({
    cni: String,
    firstName: String,
    lastName : String,
    email: String,
    passwordHash: String,
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