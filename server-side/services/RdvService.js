const Rdv = require('../models/Rdv')
const DoctorRepository = require('../repository/DoctorRepository')
const PatientRepository = require('../repository/PatientRepository')


const createRdv = async (req, res) => {
    try {
        console.log(req.body)
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

module.exports = {
    createRdv
};