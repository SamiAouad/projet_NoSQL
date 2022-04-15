const express = require('express')
const app = express()
const http = require("http")
const cors = require('cors')
const server = http.createServer(app);
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}




// Controllers
const patient = require('./controllers/PatientController')
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(patient)

app.post("/", (req, res) => {
    res.send(req.body)
})


server.listen(5000,() => {
    console.log("SERVER RUNNING");
});
