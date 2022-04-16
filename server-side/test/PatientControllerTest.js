const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const fs = require("fs");
const path = require("path");

chai.should()

chai.use(chaiHttp)

describe('POST patient/', () => {
    it('it should return a true', (done) => {
        chai.request('http://localhost:5000')
            .post("/patient")
            .field({
                firstname: "Sami",
                lastName: "Aouad",
                email: "samiaouad2@test.com",
                photo: JSON.stringify({
                        data: fs.readFileSync(path.resolve(__dirname, 'images/ibiza.png')),
                        contentType: 'image/png'
                    }
                )
            })
            .end( (err, res) => {
                // console.log("poop")
                // chai.assert.equal("zzz", "sami")
                res.should.have.status(200)
                res.body.should.equal(true)
                //chai.assert.equal(res.status, 200)
                //chai.assert.equal(res.body, true)
            } )
            done()
        }
    )
})