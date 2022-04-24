const Rdv = require('../models/Rdv')
const DoctorRepository = require('../repository/DoctorRepository')
const PatientRepository = require('../repository/PatientRepository')


const createRdv = async (req, res) => {
    try{
        const doctor = await DoctorRepository.findByCode(req.body.doctorCode)
        const patient = await PatientRepository.findByCni(req.body.patientCni)
        let rdv = new Rdv({
            patientId: patient._id,
            doctorId: doctor._id,
            description: req.body.description,
            urgent: req.body.urgent,
            date: req.body.date,
        })
        await rdv.save(async (err, rdv) => {
            if (err){
                console.log (err)
                return res.status(500).send(false)
            }
            try{
                await DoctorRepository.addRdv(doctor._id, rdv._id)
                await PatientRepository.addRdv(patient._id, rdv._id)
            }catch(message){
                console.log(message)
                res.status(500).send(false)
            }
        })
        res.status(200).send(true)
    }catch(ex){
        res.status(500).send(false)
    }
}

module.exports = {
    createRdv
};