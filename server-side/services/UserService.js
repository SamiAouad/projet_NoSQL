const doctorRepository = require('../repository/DoctorRepository')
const patientRepository = require('../repository/PatientRepository')

const login = async (req, res) => {
    console.log(req.body)
    const doctorRes = await doctorRepository.login(req.body.email, req.body.password)
    const patientRes = await patientRepository.login(req.body.email, req.body.password)
    let result = false
    if (doctorRes)
        result = await doctorRepository.findByEmail(req.body.email)
    if (patientRes){
        result = await patientRepository.findByEmail(req.body.email)
    }
    res.send(result)
}

module.exports = {
    login
}