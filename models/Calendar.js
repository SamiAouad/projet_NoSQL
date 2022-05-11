const mongoose = require("mongoose")


const calendarSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    },
    week: String,
    schedule: {
        days: String,
        hours: String
    }
})

module.exports = mongoose.model("Calendar", calendarSchema);