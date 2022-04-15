const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("Patient", patientSchema);