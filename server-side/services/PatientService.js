const bcrypt = require('bcrypt')
const Patient = require('../models/Patient')
let fs = require('fs');
let path = require('path');


const createPatient = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    let patient = new Patient({
        "firstName": req.body.firstName,
        "lastName" : req.body.lastName,
        "email": req.body.email,
        "passwordHash": passwordHash,
        photo: {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    patient.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
    fs.unlinkSync(path.resolve(__dirname, '../uploads/' + req.file.filename))
}

module.exports = {
    createPatient
};