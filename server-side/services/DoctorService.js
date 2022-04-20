const bcrypt = require('bcrypt')
const Doctor = require('../models/Doctor')
let fs = require('fs');
let path = require('path');
const {Doc} = require("mocha/lib/reporters");


const create = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    let doctor = new Doctor({
        code: req.body.code,
        "firstName": req.body.firstName,
        "lastName" : req.body.lastName,
        "email": req.body.email,
        specialty: req.body.specialty,
        education: {
            university: req.body.university,
            promotion: req.body.promotion
        },
        phone: req.body.phone,
        address: {
            city: req.body.city,
            street: req.body.street
        },
        "passwordHash": passwordHash,
        photo: {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    doctor.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
    fs.unlinkSync(path.resolve(__dirname, '../uploads/' + req.file.filename))
}

const login = async (req, res) => {
    let doctor = null
    if (req.body == null)
        return res.status(500).send(false);
    try{
        doctor = await Doctor.findOne({email: req.body.email})
        if (bcrypt.compareSync(req.body.password, doctor.passwordHash))
            return res.status(200).send(true)
        return res.status(500).send(false)
    }catch(ex){
        return res.status(500).send(false)
    }

}

module.exports = {
    create,
    login
};