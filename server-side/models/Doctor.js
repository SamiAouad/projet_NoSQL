const mongoose = require("mongoose")


const doctorSchema = new mongoose.Schema({
    code: String,
    firstName: String,
    lastName : String,
    email: String,
    specialty: String,
    education: {
        university: String,
        promotion: Number
    },
    phone: String,
    address: {
        city: String,
        street: String
    },
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
    rdv: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rdv"
    }],
    treatments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Treatment"
    }]
})

module.exports = mongoose.model("Doctor", doctorSchema);