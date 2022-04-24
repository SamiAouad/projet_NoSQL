process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('creating rdv creation', () => {
    it('Expected: creation successful', (done) => {
        chai.request(server)
            .post('/treatment/create')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                patientId: 'BB180559',
                doctorId: '12345678',
            })
            .end( (err, res) => {
                console.log (res)
                res.should.have.status(200)
                res.body.should.equal(true)
            })
        done()
    })
})