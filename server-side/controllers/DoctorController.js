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

router.post('/doctor', upload.single("photo"), DoctorService.createDoctor)


module.exports = router