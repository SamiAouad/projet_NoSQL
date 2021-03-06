const bcrypt = require('bcrypt')
const Patient = require('../models/Patient')
let fs = require('fs');
let path = require('path');
const patientRepository = require('../repository/PatientRepository')


const createPatient = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    let photo = null
    if (typeof req.file !== 'undefined') {
        photo = {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    let patient = new Patient({
        "cni": req.body.cni,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "passwordHash": passwordHash,
        "phone": req.body.phone,
        "gender": req.body.gender,
        "birthday": req.body.birthday,
        photo: photo,
        "address": {
            city: req.body.city,
            street: req.body.street
        }
    })
    patient.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log(message)
        res.status(500).send(false)
    });
    if (typeof req.file !== 'undefined')
        fs.unlinkSync(path.resolve(__dirname, '../uploads/' + req.file.filename))
}

const getPatient = async (req, res) => {
    try {
        const result = await patientRepository.findById(req.params.id)
        res.send(result)
    } catch (ex) {
        console.log(ex)
        res.status(500).send(false)
    }
}


module.exports = {
    createPatient,
    getPatient
};