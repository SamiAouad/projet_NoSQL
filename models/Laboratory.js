const mongoose = require("mongoose")


const laboratorySchema = new mongoose.Schema({
    name: String,
    email: String,
    specialty: String,

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
    test: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test"
    }],
})

module.exports = mongoose.model("Laboratory", laboratorySchema);