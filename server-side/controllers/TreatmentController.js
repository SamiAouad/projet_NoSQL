const express = require('express')
const TreatmentService = require('../services/TreatmentService')

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

router.post('/treatment/create', TreatmentService.createTreatment)
    .post('/treatment/symptom', TreatmentService.addSymptom)
    .post('/treatment/appointment', TreatmentService.addAppointment)
    .get('/treatment/:id', TreatmentService.getAllById)
    .post('/treatment/add/prescription', upload.single("photo"), TreatmentService.addPrescription)


module.exports = router