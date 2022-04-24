const Treatment = require('../models/Treatment')
const Doctor = require("../models/Doctor");
const mongoose = require("mongoose");


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
const createTreatment = async (req, res) => {
    let treatment = new Treatment({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
    })
    try{
        await treatment.save()
        return res.status(200).send(true)
    }catch(ex){
        return res.status(500).send(false)
    }

}

const addSymptom = async (req, res) => {
    let symptom = {
        description: req.body.description,
        severity: req.body.severity
    }
    try{
        await Treatment.findOneAndUpdate(
            { _id: new mongoose.mongo.ObjectId(req.body.treatmentId) },
            { $push: { symptoms: symptom } },
        );
        res.status(200).send(true)
    }catch(message){
        console.log(message)
        res.status(500).send(false)
    }
}

module.exports = {
    createTreatment,
    addSymptom
};