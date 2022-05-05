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
        // return await Rdv.find({"doctorId": doctorId})
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
const getRdvDemandsAndPatients = async (doctorId) => {
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
                "$match": {
                    "doctorId": new mongoose.Types.ObjectId(doctorId),
                    "status": false
                }
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

const getByPatientId = async (patientId) => {
    try {
        return await Rdv.aggregate([
            {
                "$lookup": {
                    from: "doctors",
                    localField: 'doctorId',
                    foreignField: '_id',
                    as: "doctor"
                }
            },
            {
                "$match": {"patientId": new mongoose.Types.ObjectId(patientId)}
            }
        ])
    } catch (ex) {
        return null
    }
}

const addFiche = async (rdvId, fiche) => {
    try {
        return await Rdv.findOneAndUpdate({_id: rdvId}, {fiche: fiche})
    } catch (ex) {
        console.log(ex)
        return false
    }
}
const acceptRdv = async (rdvId) => {
    try {
        return await Rdv.findOneAndUpdate({_id: rdvId}, {status: true})
    } catch (ex) {
        console.log(ex)
        return false
    }
}
const deleteById = async (id) => {
    try {
        await Rdv.deleteOne({_id: id});
        return true
    } catch (ex) {
        console.log(ex)
        return false
    }
}

module.exports = {
    getByDoctorCode,
    getById,
    getByDoctorId,
    getRdvAndPatients,
    getByPatientId,
    addFiche,
    acceptRdv,
    getRdvDemandsAndPatients,
    deleteById
}