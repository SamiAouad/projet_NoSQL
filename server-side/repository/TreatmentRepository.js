const Treatment = require('../models/Treatment')
const mongoose = require("mongoose");

const getByRdvId = async (rdvId) => {
    try {
        return await Treatment.findOne({rdv: rdvId})
    } catch (ex) {
        return null
    }
}


const getByDoctorId = async (doctorId) => {
    console.log(doctorId)
    try {
        return await Treatment.find({"doctorId": doctorId})
    } catch (ex) {
        return null
    }
}

const getAllByDoctorId = async (doctorId) => {
    try {
        return await Treatment.aggregate([
            {
                "$lookup": {
                    from: "rdvs",
                    localField: 'rdv',
                    foreignField: '_id',
                    as: "rdv"
                }
            },
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
const getAllByPatientId = async (patientId) => {
    try {
        return await Treatment.aggregate([
            {
                "$lookup": {
                    from: "rdvs",
                    localField: 'rdv',
                    foreignField: '_id',
                    as: "rdv"
                }
            },
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

const getAllById = async (id) => {
    try {
        return await Treatment.aggregate([
            {
                "$lookup": {
                    from: "rdvs",
                    localField: 'rdv',
                    foreignField: '_id',
                    as: "rdv"
                }
            },
            {
                "$lookup": {
                    from: "patients",
                    localField: 'patientId',
                    foreignField: '_id',
                    as: "patient"
                }
            },
            {
                "$match": {"_id": new mongoose.Types.ObjectId(id)}
            }
        ])
    } catch (ex) {
        return null
    }
}
const getAppointments = async (doctorId) => {
    try {
        return await Treatment.find({doctorId: doctorId}).select('appointments')
    } catch (ex) {
        console.log(ex)
        return null
    }
}

const getAppointmentsBuPatientId = async (patientId) => {
    try {
        return await Treatment.find({patientId: patientId}).select('appointments')
    } catch (ex) {
        console.log(ex)
        return null
    }
}
/*const getByDoctorCode = async (doctorCode) => {
    try {
        return await Treatment.find({doctorCode: doctorCode})
    } catch (ex) {
        return null
    }
}*/

const getByPatientId = async (patientId) => {
    console.log(patientId)
    try {
        return await Treatment.find({"patientId": patientId})
    } catch (ex) {
        return null
    }
}

const getMedsById = async (treatmentId) => {
    try {
        const result = await Treatment.find({"_id": treatmentId}).select("prescription")
        return result[0].prescription.meds
    } catch (ex) {
        return null
    }
}


module.exports = {
    getByDoctorId,
    getAllByDoctorId,
    getAppointments,
    getAllById,
    getAppointmentsBuPatientId,
    getByPatientId,
    getAllByPatientId,
    getMedsById
}