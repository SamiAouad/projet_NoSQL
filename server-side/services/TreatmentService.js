const Treatment = require('../models/Treatment')


const createTreatment = (req, res) => {
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
}

module.exports = {
    createTreatment
};