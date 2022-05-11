process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')
const mongoose = require("mongoose");
const Patient = require('../../models/Patient')
const Doctor = require('../../models/Doctor')

chai.should()

chai.use(chaiHttp)

describe('creating rdv creation', () => {
    it('Expected: creation successful', async () => {
        chai.request(server)
            .post('/treatment/create')
            .send({
                patientId: new mongoose.Types.ObjectId("626167ffe1e9067d9ddcb863"),
                doctorId: new mongoose.Types.ObjectId("62631993d6c3fafb4faa10e3"),
                rdv: new mongoose.Types.ObjectId('6260ab77122fb821a0ac69d0')
            })
            .end( (err, res) => {
                console.log (res)
                res.status.should.be.equal(200)
                res.body.should.equal(true)
            })
    })

})