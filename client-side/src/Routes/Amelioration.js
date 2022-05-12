import style from '../css/Amelioration.module.css'
import {Table} from 'react-bootstrap';
import logo from '../images/amelioration/Image.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import * as yup from "yup";
import {useFormik} from "formik";
import PatientNavbar from "./PatientNavbar";

const Amelioration = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [treatments, setTreatments] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'https://app-gestion-medicale.herokuapp.com/'
    })
    const validationSchema = yup.object({
        treatmentId: yup.string('invalid input').required('this field is required'),
        treatmentState: yup.number('invalid input').required('this field is required'),
        state: yup.number('invalid input').required('this field is required'),
        recovery: yup.number('invalid input').required('this field is required'),
    })

    const onSubmit = async () => {
        setError("")
        setSuccess("")
        console.log(formik.values)
        let item = new URLSearchParams();
        item.append('treatmentId', formik.values.treatmentId)
        item.append('treatmentState', formik.values.treatmentState)
        item.append('state', formik.values.state)
        item.append('recovery', formik.values.recovery)
        try {
            const result = await api.post('/api/treatment/add/progress', item)
            if (result.data)
                setSuccess("Merci pour votre participation")
            else
                setError("Une erreur s'est survenue essayer une autre fois")
        } catch (message) {
            setError("Une erreur s'est survenue essayer une autre fois")
        }
    }
    const formik = useFormik({
        initialValues: {
            treatmentId: '',
            treatmentState: '',
            state: 0,
            recovery: 0
        },
        onSubmit,
        validationSchema
    })

    useEffect(() => {
        if (!user)
            return navigate('/')
        if (user.code)
            return navigate('/')
        const getTreatments = async () => {
            const result = await api.get(`/api/treatment/patient/${user._id}`)
            console.log('consultations: ', result.data)
            setTreatments(result.data)
            setLoading(false)
        }
        getTreatments()
    }, [])

    if (loading)
        return (<p>Loading</p>)

    return (
        <div>
            <PatientNavbar/>
            <section className={style.mysection}>
                <div className='row'>
                    <div className='col' id={style.myfield}>
                        <h2 className={style.mytitle}> Chez HEALTHO </h2>
                        <p className={style.mytext}>il est aujourd’hui beaucoup plus facile d’obtenir une ordonnance
                            auprès d’un médecin sans se déplacer. </p>
                    </div>
                    <div className='col-7'>
                        <img src={logo} id={style.myimg}/>
                        <h3 className={style.mysectitle}>Votre Traitement </h3>
                        <Table id={style.mytable} responsive="md">
                            <thead className={style.thead}>
                            <tr>
                                <th>#</th>
                                <th>Nom Docteur</th>
                                <th>Adresse Docteur</th>
                                <th>Specialité</th>
                                <th>Prochain Rendez vous</th>
                                <th>Heure</th>
                                <th>Ordonnances</th>

                            </tr>
                            </thead>
                            <tbody className={style.tbody}>
                            {
                                treatments.map((treatment, key) => {
                                    let objectUrl = null
                                    if (treatment.prescription && treatment.prescription.photo) {
                                        let blob = new Blob([treatment.prescription.photo.data], {type: "image/png"});
                                        objectUrl = URL.createObjectURL(blob);
                                    }
                                    return (
                                        <tr>
                                            <td>{key + 1}</td>
                                            <td>{treatment.doctor[0].firstName} {treatment.doctor[0].lastName}</td>
                                            <td>{treatment.doctor[0].specialty}</td>
                                            <td>{treatment.doctor[0].specialty}</td>
                                            <td>{treatment.appointments[0] ? treatment.appointments[0].date.substr(0, 10) : "Aucun"}</td>
                                            <td>{treatment.appointments[0] ? treatment.appointments[0].period : "Aucun"}</td>
                                            <td>
                                                {
                                                    treatment.prescription && treatment.prescription.photo ?
                                                        <>
                                                            <a href={`data:image/jpeg;base64,${treatment.prescription.photo.data}`}
                                                               download="VotreOrdonnance">
                                                                <button type="button"
                                                                        className={style.mybutton}>Ordonnance
                                                                </button>
                                                            </a>
                                                        </>
                                                        :
                                                        "Aucune prescription"
                                                }
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
            <form onSubmit={formik.handleSubmit} className={style.mysecsection}>
                <div className='row'>
                    <div className='col-6'>
                        <h4 className={style.mysectitle}>Veuillez Sairee vos Symptomes aupres de votre
                            specialiste <br/> Afin qu'il puisse suivre vos ameliorations </h4>
                        <p className={style.myfourthtitle}>Nom de Votre Medecin
                            : </p> {/* la liste des Medecins dialo */}
                        <select name={"treatmentId"} value={formik.values.treatmentId} onChange={formik.handleChange}
                                className="custom-select" id={style.myinputSelect}>
                            <option value={""}>Choisir...</option>
                            {
                                treatments.map((treatment, key) => {
                                    return (
                                        <option key={key} value={treatment._id}>
                                            {treatment.doctor[0].firstName} {treatment.doctor[0].lastName}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='row'>
                            <div className='col-6'>
                                <p className={style.mysectext}>Etat de votre Traitement , y-a-t-il des Symptomes
                                    Secondaire ?</p>
                                <select name={"treatmentState"} value={formik.values.treatmentState}
                                        onChange={formik.handleChange}
                                        className="custom-select" id={style.mysecinputSelect}>
                                    <option value={0}>non</option>
                                    <option value={1}>Benigne</option>
                                    <option value={2}>Grave</option>
                                    <option value={3}>Critique</option>
                                </select>
                            </div>
                            <div className='col-6'>
                                <p className={style.mysectext}>A l'echelle de (1-10) comment jugez-vous votre état </p>
                                <select name={"state"} value={formik.values.state} onChange={formik.handleChange}
                                        className="custom-select" id={style.mysecinputSelect}>
                                    {
                                        [...Array(10).keys()].map(element => {
                                            return (
                                                <option value={element + 1}>{element + 1}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                        </div>

                        <div className='col-6'>
                            <p className={style.mysectext}>Au cours des dernières 24 heures, avez-vous ressenti un
                                Rétablissement ? a l'echelle de 1 a 10 </p>
                            <select name={"recovery"} value={formik.values.recovery} onChange={formik.handleChange}
                                    class="custom-select" id={style.mysecinputSelect}>
                                {
                                    [...Array(10).keys()].map(element => {
                                        return (
                                            <option value={element + 1}>{element + 1}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button className={style.mybutton} type={"submit"}>Enregistrer</button>
                        {error ? <p className={"text-danger"}>{error}</p> : null}
                        {success ? <p className={"text-success"}>{success}</p> : null}
                    </div>
                    <div className='col-6'>
                        <img alt={"logo"} src={logo} id={style.mysecimg}/>
                    </div>
                </div>
            </form>
        </div>);
}

export default Amelioration