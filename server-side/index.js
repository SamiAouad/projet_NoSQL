const express = require('express')
const app = express()
const http = require("http")
const cors = require('cors')
const server = http.createServer(app);
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('config')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GestionMedicale')


let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

if (config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

// Controllers
app.use(bodyParser.urlencoded({extended: true}))

const patientController = require('./controllers/PatientController')
const doctorController = require('./controllers/DoctorController')
const treatmentController = require('./controllers/TreatmentController')
const testController = require('./controllers/TestController')
const laboratoryController = require('./controllers/LaboratoryController')
const rdvController = require('./controllers/RdvController')
const userController = require('./controllers/UserController')
const calendarController = require("./controllers/CalendarController")

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use(patientController)
app.use(doctorController)
app.use(treatmentController)
app.use(testController)
app.use(laboratoryController)
app.use(rdvController)
app.use(userController)
app.use(calendarController)

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("../client-side/build"));
}

server.listen(port, () => {
    console.log("SERVER RUNNING");
});


module.exports = server
