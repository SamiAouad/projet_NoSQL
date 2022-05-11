const Calendar = require('../models/Calendar')

const create = async (req, res) => {
    console.log(req.body)
    let calendar = new Calendar({
        doctorId: req.body.doctorId,
        week: req.body.week,
        schedule: {
            days: req.body.days,
            hours: req.body.hours
        }
    })
    try{
        await calendar.save()
        res.status(200).send(true)
    }catch(ex){
        res.status(500).send(false)
    }
}

module.exports = {
    create,
}