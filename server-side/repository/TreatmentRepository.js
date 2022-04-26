const Treatment = require('../models/Treatment')
const mongoose = require("mongoose");

const getByRdvId = async (rdvId) =>{
    try{
        return await Treatment.findOne({rdv: rdvId})
    }catch(ex){
        return null
    }
}


const getByDoctorId = async (doctorId) =>{
    console.log(doctorId)
    try{
        return await Treatment.find({"doctorId": doctorId})
    }catch(ex){
        return null
    }
}

const getAllByDoctorId = async (doctorId) => {
    try{
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
    }catch(ex){
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


module.exports = {
    getByDoctorId,
    getAllByDoctorId
}