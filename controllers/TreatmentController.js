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

router.post('/api/treatment/create', TreatmentService.createTreatment)
    .post('/api/treatment/symptom', TreatmentService.addSymptom)
    .post('/api/treatment/appointment', TreatmentService.addAppointment)
    .get('/api/treatment/:id', TreatmentService.getAllById)
    .post('/api/treatment/add/prescription', upload.single("file"), TreatmentService.addPrescription)
    .get('/api/treatment/patient/:patientId', TreatmentService.getByPatientId)
    .post('/api/treatment/add/med', TreatmentService.addMed)
    .get('/api/treatment/meds/:treatmentId', TreatmentService.getMeds)
    .delete('/api/treatment/appointment/:treatmentId/:index', TreatmentService.deleteAppointment)
    .get('/api/treatment/appointments/patient/:patientId', TreatmentService.getAppointmentsByPatientId)
    .post('/api/treatment/add/progress', TreatmentService.addProgress)


module.exports = router