const Rdv = require('../models/Rdv')
const mongoose = require("mongoose");

const getByDoctorCode = async (doctorCode) =>{
    try{
        return await Rdv.find({doctorCode: doctorCode})
    }catch(ex){
        return null
    }
}

const getByDoctorId = async (doctorId) =>{
    console.log(doctorId)
    try{
        return await Rdv.find({"doctorId": doctorId})
    }catch(ex){
        return null
    }
}

const getById = async (id) =>{
    try{
        return await Rdv.findOne({_id: id})
    }catch(ex){
        return null
    }
}


module.exports = {
    getByDoctorCode,
    getById,
    getByDoctorId
}