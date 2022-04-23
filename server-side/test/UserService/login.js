process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('login user', () => {
    it('Expected: connection successful', (done) => {
            chai.request(server)
                .post("/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samiaouad2@test.com",
                    password: "azerty"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.be.not.equal(false)
                    done()
                } )
        }
    )

    it('Incorrect password', (done) => {
            chai.request(server)
                .post("/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samiaouad2@test.com",
                    password: "hhgghh"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(false)
                } )
            done()
        }
    )

    it('Incorrect mail', (done) => {
            chai.request(server)
                .post("/login")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "samkjhiue@test.com",
                    password: "azerty"
                })
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(200)
                    res.body.should.equal(false)
                } )
            done()
        }
    )
})