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

let upload = multer({ storage: storage });

router.post('/doctor/create', upload.single("photo"), DoctorService.create)
    .post('/doctor/login', DoctorService.login)
    .get("/doctor/find", DoctorService.find)
    .get('/doctor/findByCity', DoctorService.findByCity)
    .get('/doctor/findBySpecialty', DoctorService.findBySpecialty)
    .get('/doctor/all', DoctorService.all)


module.exports = router