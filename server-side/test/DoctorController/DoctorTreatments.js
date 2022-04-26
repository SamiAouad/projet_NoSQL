process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')
const mongoose = require("mongoose");

chai.should()

chai.use(chaiHttp)

describe('Doctor Treatment', () => {
    it('Expected: 2 treatments ', (done) => {
            chai.request(server)
                .post("/doctor/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    doctorId: new mongoose.Types.ObjectId('6260a98cbad424eec4818556')
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(true)
                    done()
                } )
        }
    )

})