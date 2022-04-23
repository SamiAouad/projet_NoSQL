process.env.NODE_ENV = 'test'
const chai = require('chai')
const repository = require("../../repository/DoctorRepository")


describe('Test of findByCode',   () => {
    it('Test 1',  async () => {
        chai.assert.equal( await repository.findByCode('BB133534'), '62601b730fcc52301de4fd8f')
    })
})