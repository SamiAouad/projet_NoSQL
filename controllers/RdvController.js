const express = require('express')
const RdvService = require('../services/RdvService')

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

router.post('/api/rdv/create', RdvService.createRdv)
    .get('/api/rdv/patient/:patientId', RdvService.getByPatientId)
    .post('/api/rdv/add/fiche', RdvService.addFiche)
    .delete('/api/rdv/:id', RdvService.deleteById)


module.exports = router