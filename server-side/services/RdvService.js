const Rdv = require('../models/Rdv')


const createRdv = (req, res) => {

    let rdv = new Rdv({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        description: req.body.description,
        urgent: req.body.urgent,
        date: req.body.date
    })
    rdv.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
}

module.exports = {
    createRdv
};