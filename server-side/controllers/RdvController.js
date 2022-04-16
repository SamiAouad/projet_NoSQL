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

let upload = multer({ storage: storage });

router.post('/rdv', upload.single("photo"), RdvService.createRdv)


module.exports = router