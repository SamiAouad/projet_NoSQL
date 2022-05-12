import style from '../asset/css/style.module.css'
import stylesec from '../css/SearchingDoctor.module.css'
import image from '../images/SearchingDoctor/doc1.jpg'
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import * as yup from "yup";
import {useFormik} from "formik";
import PatientNavbar from "./PatientNavbar";


const SearchingDoctor = () => {
    const api = axios.create({
        baseURL: 'https://applicationgestionmedicale.herokuapp.com/'
    })
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [doctors, setDoctors] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [doctorId, setDoctorId] = useState("")

    function listToMatrix(list, elementsPerSubArray) {
        let matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }

    const validationSchema = yup.object({
        urgent: yup.number('valeur invalid').required('ce champs est obligatoire'),
        date: yup.date('valeur invalid').required('ce champs est obligatoire'),
        description: yup.string('valeur invalid').required('ce champs est obligatoire'),
        period: yup.string('valeur invalid').required('ce champs est obligatoire')
    })
    const onSubmit = async () => {
        console.log(formik.values)

        const item = new URLSearchParams()
        item.append('patientId', user._id)
        item.append('doctorId', doctorId)
        item.append('date', formik.values.date)
        item.append('period', formik.values.period)
        item.append('urgent', formik.values.urgent)
        item.append('description', formik.values.description)
        try {
            await api.post('/api/rdv/create', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else
                    navigate('/home')
            })
        } catch (message) {
            navigate('/error/500')
        } finally {
            localStorage.removeItem('doctor')
        }
    }
    const formik = useFormik({
        initialValues: {
            date: '',
            urgent: '0',
            description: '',
            period: 'matin',
        },
        onSubmit,
        validationSchema
    })

    useEffect(() => {
        const item = new URLSearchParams()
        item.append('city', params.city)
        item.append('specialty', params.specialty)
        if (!user)
            navigate('/SignIn')
        else if (user.code)
            navigate('/patient/register')
        const getDoctors = async () => {
            try {
                const result = await api.post('/api/doctor/find/specialty/city', item)
                console.log(result.data)
                if (result.status === 200) {
                    setDoctors(result.data)
                    setLoading(false)
                } else
                    navigate(`/error/500`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getDoctors()
    }, [])
    if (loading)
        return <p>Loading</p>
    return (
        <div>
            <PatientNavbar/>
            <form onSubmit={formik.handleSubmit}>
                <section className={stylesec.mysection}>
                    <div className='row' id={stylesec.myrow}>
                        <h1 className={stylesec.mytext}>
                            Préparer sa consultation
                        </h1>
                        <div className='col-5'>
                            <p id={stylesec.mysectext}>Pourquoi voulez-vous consulter ?</p>
                            <textarea name={"description"} className={stylesec.mytextarea}
                                      value={formik.values.description}
                                      onChange={formik.handleChange}
                                      id="exampleFormControlTextarea1" rows="3"/>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <p id={stylesec.mysectext}>Urgence de votre Rendez-vous : </p>
                                <select className="custom-select" id={stylesec.myinputSelect} name={"urgent"}
                                        value={formik.values.urgent} onChange={formik.handleChange}>
                                    <option value="0">Simple Consultation</option>
                                    <option value="1">Urgence Cardiaque</option>
                                    <option value="2">Urgences respiratoires</option>
                                    <option value="3">Pertes de connaissance</option>
                                    <option value="4">Saignements et hémorragie</option>
                                    <option value="5">Intoxications</option>
                                    <option value="6">Empoisonnement</option>
                                    <option value="7">Accidents graves</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <p id={stylesec.mysectext}>Date : </p>
                                <input type={"date"} id={stylesec.myinputSelect} name={"date"}
                                       value={formik.values.date} onChange={formik.handleChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <p id={stylesec.mysectext}>Urgence de votre Rendez-vous : </p>
                                <select className="custom-select" id={stylesec.myinputSelect} name={"period"}
                                        value={formik.values.period} onChange={formik.handleChange}>
                                    <option value="matin">matin</option>
                                    <option value="après midi">après midi</option>
                                </select>
                            </div>
                        </div>
                        <a className={stylesec.mybutton} href={`#browse`}
                           role="button">Aller
                            choisir votre Spécialiste
                        </a>

                    </div>
                </section>
                <section className={style.mysection} id={"browse"}>
                    <div className='row' id={style.myid}>
                        {
                            listToMatrix(doctors, 3).map((list, key) => {
                                return (
                                    <div key={key}>
                                        {
                                            list.map((doctor, key2) => {
                                                console.log("doctor: ", doctor)
                                                return (
                                                    <div key={key2} className='col-4'>
                                                        <div className={style.coursecard}>
                                                            <div className={style.coursebanner}>
                                                                <img
                                                                    src={`data:image/png;base64,${doctor.photo.data}`}
                                                                />
                                                                <button type='submit'
                                                                        onClick={() => setDoctorId(doctor._id)}
                                                                        className='btn-bg-danger mt-3 '> Demander Un
                                                                    Rendez-Vous
                                                                </button>
                                                            </div>

                                                            <div className={style.coursecontent}>

                                                                <h3 className={style.cardtitle}>
                                                                    <p>{doctor.firstName} {doctor.lastName}</p>
                                                                </h3>
                                                                <div
                                                                    className={`${style.wrapper} ${style.borderbottom}`}>
                                                                    <div>
                                                                        <div
                                                                            className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                            <div
                                                                                className={"col-12"}>Addresse: {doctor.address.street}</div>
                                                                        </div>
                                                                        <div
                                                                            className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                            <div
                                                                                className={"col-3"}>Sexe:{doctor.gender}</div>
                                                                            <div
                                                                                className={"col-4"}>specialite
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                            <div className={"col-6"}>Email:</div>
                                                                            <div
                                                                                className={"col-6"}>{doctor.email}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                            <div className={"col-6"}>Telephone :
                                                                            </div>
                                                                            <div
                                                                                className={"col-6"}>{doctor.phone}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={style.wrapper}>
                                                                    <div className={style.courseprice}>
                                                                        <p className={style.authorname}>Education </p>
                                                                        <p className={style.authorname}>
                                                                            Ce praticien est un laureat
                                                                            de {doctor.education.university}
                                                                            promotion {doctor.education.promotion}
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <p></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>

                </section>

            </form>
        </div>
    );
}

export default SearchingDoctor;