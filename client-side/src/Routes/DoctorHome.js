import style from '../css/DoctorHome.module.css'
import image from '../images/doctorhome/doctor.jpg'
import NavbarDoctor from "./NavbarDoctor";
import {useNavigate} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";

const DoctorHome = () => {
    const [consultations, setConsultations] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getConsultations = async () => {
            try {
                const result = await api.post('doctor/consultation/', {doctorId: user._id})
                if (result.status === 200)
                    setConsultations(result.data)
                else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getConsultations()
    }, [])
    const validationSchema = yup.object({
        week: yup.string('valeur invalid').required('ce champs est obligatoire'),
        days: yup.string('valeur invalid').required('ce champs est obligatoire'),

        hours: yup.string('valeur invalid').required('ce champs est obligatoire'),
    })

    const onSubmit = async () => {
        console.log('Onsubmit')
        let item = new URLSearchParams();
        item.append('doctorId', user._id)
        item.append('week', formik.values.week)
        item.append('days', formik.values.days)
        item.append('hours', formik.values.hours)
        try {
            await api.post('/calendar/create', item).then(res => {
                if (res.status === 500) {
                    setError('insertion failed')
                } else if (res.data === false)
                    setError('insertion failed')
                else {
                    setSuccess('insertion successful')
                }
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            week: '',
            days: '',
            hours: ''
        },
        onSubmit,
        validationSchema
    })
    return (
        <div>
            <section id={style.SectionOneId}>
                <div id={style.SectionUp}>
                    <NavbarDoctor/>
                    <h1 className="text-center" id={style.title} style={{fontWeight: 'bold', fontSize: '35px'}}>Portail
                        Consultation&nbsp;</h1>
                </div>
                <div id={style.Sectionmiddle}>
                    <div className="container">
                        <div className="row" style={{marginTop: '70px'}}>
                            <div className="col-md-6 align-self-center" id={style.mycolumn}>
                                <p className="text-center" id={style.mypara}
                                   style={{fontSize: '27px', fontWeight: 'bold'}}>Consultation de la journée</p>
                            </div>
                            <div className="col-md-6">
                                <div className="table-responsive text-start"
                                     style={{fontSize: '13px', borderStyle: 'none'}}>
                                    <table className="table table-striped table-bordered">
                                        <thead id={style.Thead}>
                                        <tr>
                                            <th>Id</th>
                                            <th><br/>Image</th>
                                            <th>CNI patient</th>
                                            <th>Sexe</th>
                                            <th>Date</th>
                                            <th>Urgent</th>
                                            <th>Horaire</th>
                                            <th>Urgence</th>
                                        </tr>
                                        </thead>
                                        <tbody id={style.Tbody}>
                                        {
                                            consultations.map(consultation => {
                                                const date = consultation.rdv[0] ? consultation.rdv[0].date : null;
                                                if (new Date(date) >= new Date())
                                                    return (
                                                        <tr style={{color: 'rgb(255,255,255)'}}>
                                                            <td>Cell 1</td>
                                                            <td><img alt={'image'}
                                                                     src={`data:image/jpeg;base64,${consultation.patient[0].photo}`}/>
                                                            </td>
                                                            <td>{consultation.patient[0].cni}</td>
                                                            <td>{consultation.patient[0].gender}</td>
                                                            <td>{consultation.rdv[0] ? consultation.rdv[0].date.substr(0, 10) : null}</td>
                                                            <td>{consultation.rdv[0] ? consultation.rdv[0].urgent : null}</td>
                                                            <td>Cell 1</td>
                                                            <td>Cell 2</td>
                                                        </tr>
                                                    );
                                            })
                                        }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: '70px'}}>
                            <div className="col-md-6 align-self-center" style={{width: '463px'}}>
                                <p className="text-center" id="mypara-1"
                                   style={{fontSize: '27px', fontWeight: 'bold', color: '#0b2545'}}>Dernières
                                    Consultations</p>
                            </div>
                            <div className="col-md-6">
                                <div className="table-responsive text-start"
                                     style={{fontSize: '13px', borderStyle: 'none'}}>
                                    <table className="table table-striped table-bordered">
                                        <thead style={{
                                            background: 'linear-gradient(90deg, #66ddc9, #0b2545 100%), #ffffff',
                                            fontWeight: 'bold',
                                            color: 'rgb(255,255,255)'
                                        }}>
                                        <tr>
                                            <th>Id</th>
                                            <th><br/>Image</th>
                                            <th>N°Patient</th>
                                            <th>N°Dossier</th>
                                            <th>Traitement</th>
                                            <th>Date</th>
                                            <th>Horaire</th>
                                            <th>Urgence</th>
                                        </tr>
                                        </thead>
                                        <tbody id={style.Tbody}>
                                        {
                                            consultations.map(consultation => {
                                                console.log(consultation.rdv)
                                                const date = consultation.rdv[0] ? consultation.rdv[0].date : null;
                                                if (date < new Date())
                                                    return (
                                                        <tr style={{color: 'rgb(255,255,255)'}}>
                                                            <td>Cell 1</td>
                                                            <td><img alt={'image'}
                                                                     src={`data:image/jpeg;base64,${consultation.patient[0].photo}`}/>
                                                            </td>
                                                            <td>{consultation.patient[0].cni}</td>
                                                            <td>{consultation.patient[0].gender}</td>
                                                            <td>{consultation.rdv[0] ? consultation.rdv[0].date.substr(0, 10) : null}</td>
                                                            <td>{consultation.rdv[0] ? consultation.rdv[0].urgent : null}</td>
                                                            <td>Cell 1</td>
                                                            <td>Cell 2</td>
                                                        </tr>
                                                    );
                                            })
                                        }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={style.SectionTwoId} style={{width: '100%', height: '100vh'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" id={style.myCol} style={{height: '136px'}}><img src={image} style={{
                            width: '80%',
                            borderStyle: 'none',
                            borderRadius: '5px'
                        }}/></div>
                        <div className="col-md-6">
                            <section className={style.contactclean} style={{background: '#0b2545', marginTop: '90px'}}>
                                <form onSubmit={formik.handleSubmit} style={{background: '#66ddc9'}}>
                                    <h2 className="text-center" style={{
                                        color: 'rgb(255,255,255)',
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}>Programme de votre Semaine</h2>

                                    <div className="mb-3">
                                        <p>Semaine :&nbsp;</p>
                                    </div>
                                    <input type={"week"} name={"week"} value={formik.values.week}
                                           onChange={formik.handleChange}/>

                                    <div className="mb-3">
                                        <p>Quels Sont vos Jours de Travail ?</p>
                                        <select className="form-select" name={"days"} value={formik.values.days}
                                                onChange={formik.handleChange}>
                                            <option value={"Lundi-Vendredi"} selected>Lundi-Vendredi</option>
                                            <option value={"Lundi-Samedi"}>Lundi-Samedi</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <p>Horaires de travail :&nbsp;</p>
                                    </div>
                                    <select className="form-select" name={"hours"} value={formik.values.hours}
                                            onChange={formik.handleChange}>
                                        <option value={"09:00-17:00"} selected>09:00-17:00</option>
                                        <option value={'08:00-16:00'}>08:00-16:00</option>
                                        <option value={"08:00-14:00"}>08:00-14:00</option>
                                        <option value={"09:00-15:00"}>09:00-15:00</option>
                                    </select>
                                    <div className="mb-3">
                                        <button className={`btn ${style.btnprimary} ${style.reservebtn}`}
                                                type="submit">Enregistrez
                                        </button>
                                    </div>
                                    <div className={"text-success"}>{success}</div>
                                    <div className={"text-alert"}>{error}</div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DoctorHome;