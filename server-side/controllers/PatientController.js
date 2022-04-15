const express = require('express')
const router = express.Router()
const Patient = require("../models/Patient")
let multer = require('multer');
let fs = require('fs');
let path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

let upload = multer({ storage: storage });


router.post('/patient/create', upload.single("photo"), (req, res) => {
    let patient = new Patient({
        firstName: 'Sami',
        lastName : "Aouad",
        email: "samiaouad@test.com",
        passwordHash: "samitest",
        photo: {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
                contentType: 'image/png'
        }
    })
    patient.save().then(() => {
        res.send(true)
    }).catch((message) => {
        console.log (message)
        res.send(false)
    });
})

module.exports = router