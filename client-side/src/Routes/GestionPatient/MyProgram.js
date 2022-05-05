import style from '../../asset/css/style.module.css'
import image from '../../asset/images/Background.jpg'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

const Program = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
        "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"];
    const [appointments, setAppointments] = useState([])
    const [rdv, setRdv] = useState([])
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    const cancelAppointment = async (treatmentId, index) => {
        try {
            await api.delete(`/treatment/appointment/${treatmentId}/${index}`)
        } catch (ex) {
            console.log('an error has occurred')
        }
    }

    const cancelRdv = async (rdvId) => {
        try {
            await api.delete(`/rdv/${rdvId}`)
        } catch (ex) {
            console.log('an error has occurred')
        }
    }

    useEffect(() => {
        console.log(user)
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getAppointments = async () => {
            try {
                const result = await api.post('doctor/appointments/', {doctorId: user._id})
                if (result.status === 200) {
                    setRdv(result.data.rdv)
                    console.log("rdv    ", result.data.rdv)
                    //setAppointments(old => [...old, ...result.data.appointments])
                    setAppointments(result.data.appointments)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getAppointments()
    }, [])
    console.log('appointments: ', appointments)
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
                            appointments.map(element => {
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
                                                            <p className={style.eventname}> Motife </p>
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
                            })
                        }
                        {
                            rdv.map((element, key) => {
                                const date = element.date.substr(0, 10).split('-')
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
                                                        <p className={style.eventname}> Motife </p>
                                                        <div>
                                                            <button className=" btn-text "
                                                                    onClick={() => cancelRdv(element._id)}> Annuler ?
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Program;