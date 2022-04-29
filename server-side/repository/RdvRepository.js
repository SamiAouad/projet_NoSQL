const Rdv = require('../models/Rdv')
const mongoose = require("mongoose");
const Treatment = require("../models/Treatment");

const getByDoctorCode = async (doctorCode) => {
    try {
        return await Rdv.find({doctorCode: doctorCode})
    } catch (ex) {
        return null
    }
}

const getByDoctorId = async (doctorId) => {
    console.log(doctorId)
    try {
        return await Rdv.find({"doctorId": doctorId})
    } catch (ex) {
        return null
    }
}

const getRdvAndPatients = async (doctorId) => {
    console.log(doctorId)
    try {
        return await Rdv.aggregate([
            {
                "$lookup": {
                    from: "patients",
                    localField: 'patientId',
                    foreignField: '_id',
                    as: "patient"
                }
            },
            {
                "$match": {"doctorId": new mongoose.Types.ObjectId(doctorId)}
            }
        ])
    } catch (ex) {
        console.log(ex)
        return false
    }
}
const getById = async (id) => {
    try {
        return await Rdv.findOne({_id: id})
    } catch (ex) {
        return null
    }
}


module.exports = {
    getByDoctorCode,
    getById,
    getByDoctorId,
    getRdvAndPatients
}