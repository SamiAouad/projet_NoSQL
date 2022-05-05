const Treatment = require('../models/Treatment')
const mongoose = require("mongoose");
const treatmentRepository = require('../repository/TreatmentRepository')
const rdvRepository = require('../repository/RdvRepository')


const createTreatment = async (req, res) => {
    const treatment = new Treatment({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        appointments: req.body.appointments,
        symptoms: req.body.symptoms,
        rdv: req.body.rdvId
    })
    try {
        await treatment.save()
        await rdvRepository.acceptRdv(req.body.rdvId)
        return res.status(200).send(true)
    } catch (ex) {
        return res.status(500).send(false)
    }
}
/*const createTreatment = (req, res) => {
    const reqSymptoms = JSON.parse(req.body.symptoms) // not yet tested (problem of symptoms arrays)
    let symptoms = []
    reqSymptoms.forEach((symptom) => {
        symptoms.push({
            description: symptom.description,
            severity: symptom.severity
        })
    })
    let treatment = new Treatment({
       patientId: req.body.patientId,
       doctorId: req.body.doctorId,
       description: req.body.description,
       symptoms: symptoms
    })
    treatment.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
}*/

const addSymptom = async (req, res) => {
    let symptom = {
        description: req.body.description,
        severity: req.body.severity
    }
    try {
        await Treatment.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(req.body.treatmentId)},
            {$push: {symptoms: symptom}},
        );
        res.status(200).send(true)
    } catch (message) {
        console.log(message)
        res.status(500).send(false)
    }
}

const addAppointment = async (req, res) => {
    console.log(req.body)
    let appointment = {
        date: req.body.date,
        period: req.body.period,
        description: req.body.description,
        urgency: req.body.urgency
    }
    try {
        await Treatment.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(req.body.treatmentId)},
            {$push: {appointments: appointment}},
        );
        res.status(200).send(true)
    } catch (message) {
        console.log(message)
        res.status(500).send(false)
    }
}

const getAllById = async (req, res) => {
    try {
        const result = await treatmentRepository.getAllById(req.params.id)
        res.send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const addPrescription = async (req, res) => {
    console.log(req.body)
    try {
        await Treatment.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(req.body.treatmentId)},
            {"prescription.photo": req.body.photo},
        );
        res.status(200).send(true)
    } catch (message) {
        console.log(message)
        res.status(500).send(false)
    }
}

const getByPatientId = async (req, res) => {
    try {
        const result = await treatmentRepository.getAllByPatientId(req.params.patientId)
        res.send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const addMed = async (req, res) => {
    console.log(req.body)
    let med = {
        name: req.body.name,
        dose: req.body.dose,
        unit: req.body.unit,
        when: req.body.when,
        duration: req.body.duration,
        description: req.body.description
    }
    try {
        await Treatment.findOneAndUpdate(
            {_id: new mongoose.mongo.ObjectId(req.body.treatmentId)},
            {$push: {"prescription.meds": med}},
        );
        res.status(200).send(true)
    } catch (message) {
        console.log(message)
        res.status(500).send(false)
    }
}

const getMeds = async (req, res) => {
    try {
        const result = await treatmentRepository.getMedsById(req.params.treatmentId)
        res.send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const deleteAppointment = async (req, res) => {
    try {
        await Treatment.updateOne({_id: req.params.treatmentId}, {$pullAll: {appointments: [req.params.index]}})
        res.send(true)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const getAppointmentsByPatientId = async (req, res) => {
    try {
        const result = await treatmentRepository.getAllByPatientId(req.params.patientId)
        res.status(200).send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

module.exports = {
    createTreatment,
    addSymptom,
    addAppointment,
    getAllById,
    addPrescription,
    getByPatientId,
    addMed,
    getMeds,
    deleteAppointment,
    getAppointmentsByPatientId
};