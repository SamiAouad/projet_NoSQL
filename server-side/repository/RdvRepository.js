const Rdv = require('../models/Rdv')

const getByDoctorId = async (doctorId) =>{
    try{
        return await Rdv.find({doctorId: doctorId})
    }catch(ex){
        return null
    }
}

module.exports = {
    getByDoctorId
}