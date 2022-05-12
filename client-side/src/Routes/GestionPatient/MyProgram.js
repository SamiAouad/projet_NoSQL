import style from '../../asset/css/style.module.css'
import image from '../../asset/images/Doctorpic.jpg'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

const Program = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
        "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"];
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const [rdv, setRdv] = useState([])
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'https://app-gestion-medicale.herokuapp.com/'
    })

    const cancelAppointment = async (treatmentId, index) => {
        try {
            await api.delete(`/treatment/appointment/${treatmentId}/${index}`)
            setRefresh(!refresh)
        } catch (ex) {
            console.log('an error has occurred')
        }
    }

    const cancelRdv = async (rdvId) => {
        try {
            await api.delete(`/rdv/${rdvId}`)
            setRefresh(!refresh)
        } catch (ex) {
            console.log('an error has occurred')
        }
    }

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getAppointments = async () => {
            try {
                const result = await api.post('/api/doctor/appointments/', {doctorId: user._id})
                if (result.status === 200) {
                    setRdv(result.data.rdv)
                    //setAppointments(old => [...old, ...result.data.appointments])
                    setAppointments(result.data.appointments)
                    setLoading(false)
                    console.log("result rdv: ", result.data.rdv)
                    console.log('result appointments: ', result.data.appointments)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getAppointments()
    }, [refresh])
    if (loading)
        return <p>Loading</p>
    return (
        <div>
            <section className={style.event}>
                <div className='row'>
                    <div className='col-4'>
                        <div className={style.eventleft}>
                            <div className={style.eventbanner}>
                                <img src={image} className={style.bannerimg}/>
                            </div>
                        </div>

                    </div>
                    <div className="col-8 field">

                        <p className={style.sectionsubtitle}>Mes Consultations</p>
                        {
                            appointments.length !== 0 ?
                                appointments.map(element => {
                                    return (
                                        element.appointments.map((appointment, key) => {
                                            const date = appointment.date.substr(0, 10).split('-')
                                            return (
                                                <div key={key} className={style.eventcardgroup}>
                                                    <div className={style.eventcard}>
                                                        <div className='row'>
                                                            <div className='col-4'>
                                                                <div className={style.contentleft}>
                                                                    <p className={style.day}>{date[0]}</p>
                                                                    <p className={style.month}>{months[date[1] - 1]}, {date[2]}</p>
                                                                </div>

                                                            </div>
                                                            <div className='col-8'>
                                                                <div className={style.contentright}>
                                                                    <div className={style.schedule}>
                                                                        <p className={style.time}>{appointment.period}</p>
                                                                    </div>
                                                                    <p className={style.eventname}>{element.patient[0].firstName} </p>
                                                                    <p className={style.eventname}> {appointment.description} </p>
                                                                    <div>
                                                                        <button className=" btn-text "
                                                                                onClick={() => cancelAppointment(element._id, key)}> Annuler
                                                                            ?
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                }) : null
                        }
                        {
                            rdv.length !== 0 ?
                                rdv.map((element, key) => {
                                    const date = element.date.substr(0, 10).split('-')
                                    if (element.status)
                                        return (
                                            <div key={key} className={style.eventcardgroup}>
                                                <div className={style.eventcard}>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            <div className={style.contentleft}>
                                                                <p className={style.day}>{date[0]}</p>
                                                                <p className={style.month}>{months[date[1] - 1]}, {date[2]}</p>
                                                            </div>

                                                        </div>
                                                        <div className='col-8'>
                                                            <div className={style.contentright}>
                                                                <div className={style.schedule}>
                                                                    <p className={style.time}>{element.period}</p>
                                                                </div>
                                                                <p className={style.eventname}>{element.patient[0].firstName} {element.patient[0].lastName}</p>
                                                                <p className={style.eventname}> {element.description} </p>
                                                                <div>
                                                                    <button className=" btn-text "
                                                                            onClick={() => cancelRdv(element._id)}> Annuler
                                                                        ?
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                }) : null
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Program;