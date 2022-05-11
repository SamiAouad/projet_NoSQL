const express = require('express')
const LaboratoryService = require('../services/LaboratoryService')

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

router.post('/api/rdv', upload.single("photo"), LaboratoryService.createLaboratory)


module.exports = router