process.env.NODE_ENV = 'test'
const chai = require('chai')
const repository = require('../../repository/TreatmentRepository')
const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost:27017/test')

    chai.should()

    describe('Get treatments by doctorId', () => {
        it("get two entries", async () => {
            const treatments = await repository.getByDoctorId(new mongoose.mongo.ObjectId('62640c2d04af486ebf2af16c'))
            console.log(treatments)
            treatments.should.not.be.empty
        })
    })