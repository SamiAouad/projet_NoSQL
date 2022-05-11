const express = require('express')
const PatientService = require('../services/PatientService')

const router = express.Router()
let multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, "temporary")
    }
});

let upload = multer({storage: storage});

router.post('/api/patient/create', upload.single("photo"), PatientService.createPatient)
    .get('/api/patient/:id', PatientService.getPatient)
    .delete('/api/patient/:id')
    .put('/api/patient/:id')

module.exports = router