process.env.NODE_ENV = 'test'
const chai = require('chai')
const RdvRepository = require('../../../repository/RdvRepository')
const mongoose = require('mongoose')

chai.should()

mongoose.connect('mongodb://localhost:27017/test')

describe('get rdv by doctor id',  () =>{
    it('should return some entries', async () => {
        const doctorId = mongoose.Types.ObjectId("6260a98cbad424eec4818556")
        const result = await RdvRepository.getByDoctorId(doctorId)
        result.should.not.be.empty
    })
})