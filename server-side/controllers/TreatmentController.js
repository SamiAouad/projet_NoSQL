const express = require('express')
const TreatmentService = require('../services/TreatmentService')
const rdvService = require('../services/RdvService')

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
    .post('/treatment/add/prescription', upload.single("file"), TreatmentService.addPrescription)
    .get('/treatment/patient/:patientId', TreatmentService.getByPatientId)
    .post('/treatment/add/med', TreatmentService.addMed)
    .get('/treatment/meds/:treatmentId', TreatmentService.getMeds)
    .delete('/treatment/appointment/:treatmentId/:index')
    .get('/treatment/appointments/patient/:patientId', TreatmentService.getAppointmentsByPatientId)


module.exports = router