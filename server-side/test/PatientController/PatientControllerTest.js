process.env.NODE_ENV = 'test'
const chai = require('chai')
const server = require("../../index")
const chaiHttp = require('chai-http')

chai.should()

chai.use(chaiHttp)

describe('POST patient/', () => {
    it('Expected: valid all fields are provided', (done) => {
        chai.request(server)
            .post("/patient")
            .field({
                cni: 'BB180559',
                firstName: "Sami",
                lastName: "Aouad",
                password: "azerty",
                email: "samiaouad2@test.com",
            })
            .attach("photo", "./test/images/test.jpg")
            .end( (err, res) => {
                console.log (res)
                res.should.have.status(200)
                res.body.should.equal(true)
                done()
            } )
        }
    )
    it('Expected: invalid missing cni', (done) => {
            chai.request(server)
                .post("/patient")
                .field({
                    firstName: "Sami",
                    lastName: "Aouad",
                    password: "azerty",
                    email: "samiaouad2@test.com",
                })
                .attach("photo", "./test/images/test.jpg")
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(500)
                    res.body.should.equal(false)
                    done()
                } )
        }
    )
    it('Expected: invalid missing email', (done) => {
            chai.request(server)
                .post("/patient")
                .field({
                    cni: 'BB180559',
                    firstName: "Sami",
                    lastName: "Aouad",
                    password: "azerty"
                })
                .attach("photo", "./test/images/test.jpg")
                .end( (err, res) => {
                    console.log (res)
                    res.should.have.status(500)
                    res.body.should.equal(false)
                    done()
                } )
        }
    )

    it('Expected: valid missing photo', (done) => {
            chai.request(server)
                .post("/patient")
                .field({
                    cni: 'BB180559',
                    firstName: "Sami",
                    lastName: "Aouad",
                    password: "azerty",
                    email: "samiaouad2@test.com",
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