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

let upload = multer({ storage: storage });

router.post('/treatment/create', TreatmentService.createTreatment)
    .post('/treatment/symptom', TreatmentService.addSymptom)


module.exports = router