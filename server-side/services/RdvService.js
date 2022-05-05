const Rdv = require('../models/Rdv')
const DoctorRepository = require('../repository/DoctorRepository')
const PatientRepository = require('../repository/PatientRepository')
const rdvRepository = require('../repository/RdvRepository')
const treatmentRepository = require('../repository/TreatmentRepository')


const createRdv = async (req, res) => {
    try {
        let rdv = new Rdv({
            "description": req.body.description,
            "urgent": req.body.urgent,
            "date": req.body.date,
            "period": req.body.period,
            "patientId": req.body.patientId,
            "doctorId": req.body.doctorId,
        })
        await rdv.save(async (err, rdv) => {
            console.log(rdv)
            if (err) {
                console.log(err)
                return res.status(500).send(false)
            }
            try {
                await DoctorRepository.addRdv(req.body.doctorId, rdv._id)
                await PatientRepository.addRdv(req.body.patientId, rdv._id)
            } catch (message) {
                console.log(message)
                res.status(500).send(false)
            }
        })
        res.status(200).send(true)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const getByPatientId = async (req, res) => {
    try {
        const result = await rdvRepository.getByPatientId(req.params.patientId)
        res.status(200).send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const addFiche = async (req, res) => {
    const fiche = {
        state: req.body.state,
        disease: req.body.disease,
        consumption: req.body.consumption
    }
    try {
        const result = await rdvRepository.addFiche(req.body.rdvId, fiche)
        res.status(200).send(result)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const acceptRdv = async (req, res) => {
    try {
        await treatmentRepository.createTreatment()
        await rdvRepository.getByPatientId(req.params.patientId)
        res.status(200).send(true)
    } catch (ex) {
        res.status(500).send(false)
    }
}

const deleteById = async (req, res) => {
    try {
        await rdvRepository.deleteById(req.params.id)
        res.send(true)
    } catch (ex) {
        res.status(500).send(false)
    }
}

module.exports = {
    createRdv,
    getByPatientId,
    addFiche,
    acceptRdv,
    deleteById
};