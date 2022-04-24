process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('create rdv', () => {
    it('Expected: valid all fields are provided', (done) => {
            chai.request(server)
                .post("/rdv/create")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    patientCni: 'BB180559',
                    doctorCode: '12345678',
                    description: 'this is a description',
                    urgent: 3,
                    date: new Date(2022, 4, 25)
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(true)
                } )
            done()
        }
    )
})