const Patient = require('../models/Patient')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const findByCni = async (cni) => {
    try {
        return await Patient.findOne({"cni": cni}, {_id: 1})
    } catch (ex) {
        console.log(ex)
        return null
    }
}

const addRdv = async (patientId, rdvId) => {
    try {
        await Patient.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(patientId)},
            {$push: {rdv: new mongoose.mongo.ObjectId(rdvId)}},
        );
    } catch (message) {
        console.log(message)
    }
}

const login = async (email, password) => {
    let patient = null
    try {
        patient = await Patient.findOne({email: email})
        if (bcrypt.compareSync(password, patient.passwordHash))
            return true
        return false
    } catch (ex) {
        return false
    }

}

const findByEmail = async (email) => {
    try {
        return await Patient.findOne({email: email}, {
            _id: 1,
            cni: 1,
            email: 1,
            firstName: 1,
            lastName: 1,
            phone: 1,
            photo: 1,
            dossierMedical: 1,
            rdv: 1
        })
    } catch (message) {
        console.log(message)
        return null
    }
}

const findById = async (patientId) => {
    try {
        return await Patient.findOne({_id: patientId}, {
            _id: 1,
            cni: 1,
            email: 1,
            firstName: 1,
            lastName: 1,
            phone: 1,
            photo: 1,
            dossierMedical: 1,
            rdv: 1
        })
    } catch (message) {
        console.log(message)
        return null
    }
}

module.exports = {
    findByCni,
    addRdv,
    login,
    findByEmail,
    findById
};