process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('Doctor Login', () => {
    it('Expected: login successful ', (done) => {
            chai.request(server)
                .post("/doctor/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samiaouad@test.com",
                    password: "azerty"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(true)
                    done()
                } )
        }
    )
    it("Expected: login fails(user doesn't exist)", (done) => {
            chai.request(server)
                .post("/doctor/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samiaouad2@test.com",
                    password: "azerty"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(false)
                    done()
                } )
        }
    )

    it("Expected: login fails(wrong password)", (done) => {
            chai.request(server)
                .post("/doctor/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samiaouad2test.com",
                    password: "azery"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(false)
                    done()
                } )
        }
    )

})