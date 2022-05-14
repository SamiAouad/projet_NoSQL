import style from '../css/PatientHomePage.module.css'
import image from '../images/PatientHomePage/BackgroundPatient.jpg'
import firsticon from '../images/PatientHomePage/icon.png'
import secondicon from '../images/PatientHomePage/secondicon.png'
import thirsticon from '../images/PatientHomePage/third.png'
import * as yup from "yup";
import {useFormik} from "formik";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import PatientNavbar from "./PatientNavbar";
import axios from "axios";

const PatientHomePage = () => {
    const api = axios.create({
        baseURL: 'https://app-gestion-medicale.herokuapp.com/'
    })
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const error = params.error
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const validationSchema = yup.object({
        city: yup.string('valeur invalid').required('ce champs est obligatoire'),
        specialty: yup.string('valeur invalid').required('ce champs est obligatoire'),
    })

    const onSubmit = async () => {
        /*const item = new URLSearchParams()
        item.append('city', formik.values.city)
        item.append('specialty', formik.values.specialty)
        try {
            setLoading(true)
            const result = await api.post('/api/doctor/find/specialty/city', item)
            if (result.status === 200) {
                if (result.data.length !== 0)
                    navigate(`/patient/search/doctor/${formik.values.specialty}/${formik.values.city}`)
                else {
                    setError("Aucun docteur ne correspond à votre recherche")
                    setLoading(false)
                    setRefresh(refresh)
                }
            } else
                navigate(`/error/500`)
        } catch (ex) {
            navigate(`/error/500`)
            console.log("error")
        }*/
        navigate(`/patient/search/doctor/${formik.values.specialty}/${formik.values.city}`)
    }
    const formik = useFormik({
        initialValues: {
            specialty: 'orthophonie',
            city: 'rabat',
        },
        onSubmit,
        validationSchema
    })
    useEffect(() => {
        if (!user)
            return navigate('/signin')
        if (user.code)
            return navigate('/signin')

    }, [refresh])
    if (loading)
        return <p>Loading</p>
    return (
        <div>
            <PatientNavbar/>
            <section className={style.mysection}>
                <div className='row'>
                    <div className='col-4'>
                        <img id={style.myimg} src={image}/>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <h1 className={style.title}> Bienvenue à votre plateforme Médicale </h1>
                            <div className={style.mycontainer}>

                                <form onSubmit={formik.handleSubmit} className={style.myform}>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <div className='row'>

                                                <div className='col-4'>
                                                    <label className={style.subtitle}>Des Symptomes ? </label>
                                                </div>
                                                <div className='col-6'>
                                                    <select className="custom-select" id={style.inputGroupSelect01}>
                                                        <option selected>courbatures</option>
                                                        <option value="0">essouflement</option>
                                                        <option value="1">fatigue</option>
                                                        <option value="2">Blocage du genou</option>
                                                        <option value="3">Aniscorie</option>
                                                        <option value="4">Croûtes dans le nez</option>
                                                        <option value="5">Le saignement du nez</option>
                                                        <option value="6">Grincement</option>
                                                        <option value="7">La déformation des doigts</option>
                                                        <option value="8">La difficulté à avaler</option>
                                                        <option value="9">Autre</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4'>

                                                    <label className={style.subtitle}>Quel Specialiste ? </label>
                                                </div>
                                                <div className='col-6'>
                                                    <select name={'specialty'} className="custom-select"
                                                            value={formik.values.specialty}
                                                            onChange={formik.handleChange}
                                                            id={style.inputGroupSelect01}>
                                                        <option value="orthophonie">Orthophonie</option>
                                                        <option value="l’anesthésiologie">L’anesthésiologie</option>
                                                        <option value="l’andrologie">L’andrologie</option>
                                                        <option value="cardiologie">cardiologie</option>
                                                        <option value="chirurgie cardiaque">chirurgie cardiaque</option>
                                                        <option value="chirurgie générale"> chirurgie générale</option>
                                                        <option value="chirurgie pédiatrique">chirurgie pédiatrique
                                                        </option>
                                                        <option value="neurochirurgie">neurochirurgie</option>
                                                        <option value="dermatologie">dermatologie</option>
                                                        <option value="L’endocrinologie">L’endocrinologie</option>
                                                        <option value="neurologie">neurologie</option>
                                                    </select>
                                                </div>


                                            </div>

                                            <div className='row'>
                                                <div className='col-4'>
                                                    <label className={style.subtitle}>Dans Quelle Ville ? </label>
                                                </div>
                                                <div className='col-6'>
                                                    <select name={'city'} className="custom-select"
                                                            value={formik.values.city}
                                                            onChange={formik.handleChange}
                                                            id={style.inputGroupSelect01}>
                                                        <option value={"rabat"} selected>Rabat</option>
                                                        <option value="fes">Fes</option>
                                                        <option value="casablanca">Casablanca</option>
                                                        <option value="marrakech">Marrakech</option>
                                                        <option value="tanger">Tanger</option>
                                                        <option value="agadir">Agadir</option>
                                                        <option value="meknes">Meknes</option>
                                                        <option value="dakhla">Dakhla</option>
                                                        <option value="nador">Nador</option>
                                                        <option value="tetouan">Tetouan</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='col-4'>
                                            <button className={style.mybutton} type="submit">Faite votre
                                                Recherche
                                            </button>
                                        </div>
                                        <div className={"col-4"}/>
                                        {error ?
                                            <div className={"col-6 text-danger"}>Aucun docteur ne correspond à votre
                                                recherche</div> : null}
                                    </div>
                                </form>


                            </div>


                        </div>
                    </div>

                </div>

            </section>
            <section className={style.mysecondsection}>
                <div className='row'>
                    <h3 className={style.secondsubtitle}>Pourquoi devriez-vous consulter votre médecin
                        régulièrement?</h3>
                </div>
                <div className={style.mythirdcontainer}>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={firsticon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle}>Une visite régulière chez votre médecin permet à ce
                                dernier ainsi qu’à vous-même de discuter et de vérifier vos antécédents médicaux afin
                                d’identifier certaines anomalies ou préoccupations. </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={thirsticon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle}>Visiter votre médecin alors que vous êtes en bonne santé
                                fait partie d’une approche proactive pour votre santé. </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={secondicon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle}>Vous pourriez, à tout moment, ressentir certains maux ou
                                douleurs qui soulèveront des questions au sujet de votre état de santé. </h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PatientHomePage;