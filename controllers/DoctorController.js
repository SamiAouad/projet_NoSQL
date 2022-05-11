const express = require('express')
const DoctorService = require('../services/DoctorService')

const router = express.Router()
let multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

let upload = multer({storage: storage});

router.post('/api/doctor/create', upload.single("photo"), DoctorService.create)
    .post('/api/doctor/login', DoctorService.login)
    .get("/api/doctor/find", DoctorService.find)
    .get('/api/doctor/all', DoctorService.all)
    // .post('/doctor/rdv', DoctorService.getRdv)
    .post('/api/doctor/consultation/', DoctorService.getTreatments)
    .post('/api/doctor/appointments', DoctorService.getConsultations)
    .post('/api/doctor/rdv', DoctorService.getRdvWithPatients)
    .get('/api/doctor/rdv/demands/:doctorId', DoctorService.getRdvDemandsWithPatients)
    .post('/api/doctor/treatments', DoctorService.getTreatments)
    .post('/api/doctor/find/specialty/city', DoctorService.findByCityAndSpecialty)


module.exports = router