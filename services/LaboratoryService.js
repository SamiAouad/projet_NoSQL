const Test = require('../models/Laboratory')
let fs = require('fs');
let path = require('path');


const createLaboratory = (req, res) => {
    let laboratory = new Test({
        name: req.body.name,
        email: req.body.email,
        specialty: req.body.specialty,
        phone: req.body.phone,
        password: passwordHash,
        address: {
            city: req.body.city,
            street: req.body.street
        },
        photo: {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    laboratory.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
    fs.unlinkSync(path.resolve(__dirname, '../uploads/' + req.file.filename))
}

module.exports = {
    createLaboratory
};