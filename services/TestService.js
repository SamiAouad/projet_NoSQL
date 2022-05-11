const Test = require('../models/Test')
let fs = require('fs');
let path = require('path');


const createTest = (req, res) => {
    let test = new Test({
        patientId: req.body.patientId,
        laboratoryId: req.body.laboratoryId,
        type: req.body.type,
        urgent: req.body.urgent,
        sample: req.body.sample,
        duration: req.body.duration,
        results: JSON.parse(req.body.results),
        photo: {
            data: fs.readFileSync(path.resolve(__dirname, '../uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    test.save().then(() => {
        res.status(200).send(true)
    }).catch((message) => {
        console.log (message)
        res.status(500).send(false)
    });
    fs.unlinkSync(path.resolve(__dirname, '../uploads/' + req.file.filename))
}

module.exports = {
    createTest
};