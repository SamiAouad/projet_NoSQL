import style from '../css/Patientrdvs.module.css'
import {Table} from 'react-bootstrap';
import image from '../images/patientrdv/Clock.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import * as yup from "yup";
import {useFormik} from "formik";
import PatientNavbar from "./PatientNavbar";

const PatientRdv = () => {
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })
    const [rdv, setRdv] = useState([])
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [consultations, setConsultations] = useState([])

    useEffect(() => {
        if (!user)
            return navigate('/Signin')
        if (user.code)
            return navigate('/error/404')
        const getRdv = async () => {
            try {
                let result = await api.get(`/rdv/patient/${user._id}`)
                if (result.status === 500)
                    return navigate('/error/500')
                setRdv(result.data)
                result = await api.get(`/treatment/appointments/patient/${user._id}`)
                console.log("consultations: ", result.data)
                if (result.status === 500)
                    return navigate('/error/500')
                setConsultations(result.data)
                setLoading(false)
            } catch (ex) {
                console.log(ex)
                navigate("/error/403")
            }
        }
        getRdv()
    }, [])

    const validationSchema = yup.object({
        state: yup.string('valeur invalid').required('ce champs est obligatoire'),
        disease: yup.string('valeur invalid').required('ce champs est obligatoire'),
        consumption: yup.string('valeur invalid'),
        rdvId: yup.string('valeur invalid').required('ce champs est obligatoire')
    })
    const onSubmit = async () => {
        const item = new URLSearchParams()
        item.append('state', formik.values.state)
        item.append('disease', formik.values.disease)
        item.append('consumption', formik.values.consumption)
        item.append('rdvId', formik.values.rdvId)
        try {
            await api.post('/rdv/add/fiche', item).then(res => {
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
            state: 'Très Bon',
            disease: 'true',
            consumption: '',
            rdvId: ''
        },
        onSubmit,
        validationSchema
    })

    if (loading)
        return <p>Loading</p>
    return (
        <div>
            <PatientNavbar/>
            <section className={style.myfirstsection}>
                <div className='row'>
                    <div className='col-8'>
                        <h5 className={style.mytitle}>
                            Etat d'avancement de vos Futures Consultations :
                        </h5>

                        <Table id={style.mytable} responsive="md">
                            <thead className={style.thead}>
                            <tr>
                                <th>#</th>
                                <th>Nom Doctor</th>
                                <th>Specialité</th>
                                <th>Statut</th>
                                <th>Date</th>
                                <th>horaire</th>

                            </tr>
                            </thead>
                            <tbody className={style.tbody}>
                            {
                                rdv ?
                                    rdv.map((data, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{data.doctor[0].firstName} {data.doctor[0].lastName}</td>
                                                <td>{data.doctor[0].specialty}</td>
                                                <td>{data.status ? "Accepté" : "En Attente"} </td>
                                                <td>{data.date.substr(0, 10)}  </td>
                                                <td>{data.period}</td>
                                            </tr>
                                        )
                                    }) : null
                            }
                            {
                                consultations ?
                                    consultations.map((data) => {
                                        console.log("appointments test: ", data.appointments)
                                        return (
                                            data.appointments.map((consultation, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>{data.doctor[0].firstName} {data.doctor[0].lastName}</td>
                                                        <td>{data.doctor[0].specialty}</td>
                                                        <td><a
                                                            href={`/patient/treatment/${consultation._id}`}>Detail</a>
                                                        </td>
                                                        <td>{consultation.date.substr(0, 10)}  </td>
                                                        <td>{consultation.period}</td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }) : null
                            }
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-4'>
                        <img alt={"doctor"} src={image} id={style.myimg}/>
                    </div>
                </div>

            </section>
            <section className={style.mysecsection}>
                <form onSubmit={formik.handleSubmit} className='row'>
                    <div className='col-6'>
                        <h4 className={style.mysectitle}>Si vous vous êtes accepté veuillez remplir <br/> la fiche
                            d'information pour votre medecin</h4>
                        <p className={style.myfourthtitle}>Date de votre Rendez-Vous
                            : </p> {/* la liste des rendez vous accepté */}
                        <select onChange={formik.handleChange} name={"rdvId"}
                                className="custom-select" id={style.myinputSelect}>
                            <option value={""}>choisir...</option>
                            {
                                rdv.map((element, key) => {
                                    if (element.status)
                                        return (
                                            <option key={key} value={element._id}>{element.doctor[0].firstName}</option>
                                        )
                                })
                            }
                        </select>
                        {formik.errors.rdvId ? <p className={"text-danger"}>{formik.errors.rdvId}</p> : null}
                        <div className='row'>
                            <div className='col-6'>
                                <p className={style.mysectext}>Comment est votre état de santé général ?</p>
                                <select onChange={formik.handleChange} name={"state"}
                                        className="custom-select" id={style.mysecinputSelect}>
                                    <option value={"Très bon"}>Trés bon</option>
                                    <option value="Bon">Bon</option>
                                    <option value="Mauvais">Mauvais</option>
                                    <option value="Très mauvais">Trés mauvais</option>
                                </select>
                            </div>
                            <div className='col-6'>
                                <p className={style.mysectext}>Souffrez-vous d’une maladie ou d’un problème de santé
                                    chronique ?</p>
                                <select onChange={formik.handleChange} name={"disease"}
                                        className="custom-select" id={style.mysecinputSelect}>
                                    <option value={"true"}>oui</option>
                                    <option value={"false"}>non</option>

                                </select>
                            </div>

                        </div>

                        <div className='col-6'>
                            <p className={style.mysectext}>Au cours des dernières 24 heures, avez-vous consommé des
                                médicaments ? (si oui veuillez designer leurs Noms )</p>
                            <textarea onChange={formik.handleChange} name={"consumption"}
                                      value={formik.values.consumption}
                                      className={style.mytextarea} id="exampleFormControlTextarea1" rows="3"/>
                        </div>
                        <button className={style.mybutton} type="submit">Enregistrer</button>

                    </div>

                    <div className='col-6' id={style.myfield}>
                        <h2 className={style.mythirdtitle}>Le malade prend l'avis du médecin <br/> Le médecin prend la
                            vie du malade...</h2>
                    </div>


                </form>

            </section>
        </div>
    );
}

export default PatientRdv;