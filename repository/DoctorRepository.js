const Doctor = require('../models/Doctor')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const findByCode = async (code) => {
    try {
        return await Doctor.findOne({code: code}, {_id: 1})
    } catch (message) {
        console.log(message)
        return null
    }
}

const findByEmail = async (email) => {
    try {
        return await Doctor.findOne({email: email})
    } catch (message) {
        console.log(message)
        return null
    }
}
const addRdv = async (doctorId, rdvId) => {
    try {
        await Doctor.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(doctorId)},
            {$push: {rdv: new mongoose.mongo.ObjectId(rdvId)}},
        );
    } catch (message) {
        console.log(message)
    }
}

const login = async (email, password) => {
    let doctor = null
    try {
        doctor = await Doctor.findOne({email: email})
        if (bcrypt.compareSync(password, doctor.passwordHash))
            return true
        return false
    } catch (ex) {
        return false
    }
}

const findByCity = async (city) => {
    try {
        return await Doctor.find({city: city})
    } catch (ex) {
        return false
    }
}

const findBySpecialty = async (specialty) => {
    try {
        return await Doctor.find({specialty: specialty})
    } catch (ex) {
        return false
    }
}
const findByCityAndSpecialty = async (city, specialty) => {
    try {
        return await Doctor.find({specialty: specialty, "address.city": city})
    } catch (ex) {
        return false
    }
}


module.exports = {
    findByCode,
    addRdv,
    findByEmail,
    login,
    findByCity,
    findBySpecialty,
    findByCityAndSpecialty
};