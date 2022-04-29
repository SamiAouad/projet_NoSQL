import React, {useEffect, useState} from 'react';
import style from "../../asset/css/style.module.css";
import image1 from "../../asset/images/PatientPatient.png";
import * as yup from "yup";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import axios from "axios";

function AddPrescription(props) {
    const [treatments, setTreatments] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getTreatments = async () => {
            try {
                const result = await api.post('doctor/treatments/', {doctorId: user._id})
                if (result.status === 200) {
                    setTreatments(result.data)
                    setLoading(false)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getTreatments()
    })


    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })
    const validationSchema = yup.object({
        code: yup.string('valeur invalid').required('ce champs est obligatoire'),
    })

    const onSubmit = async () => {
        console.log('Onsubmit')
        let item = new FormData();
        item.append('code', formik.values.code)

        try {
            await api.post('/doctor/create', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else
                    console.log('looking good')
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {},
        onSubmit,
        validationSchema
    })
    if (loading)
        return <div>Loading</div>
    return (
        <section className={style.features}>
            <div className={style.featuresleft}>

                <h2 className={style.sectiontitle}>Création Dossier Médicale </h2>
                <div className='row'>
                    <div className='col-3'>
                        <img className={style.myimg} src={image1}/>
                    </div>
                    <div className='col-5'>
                        <div className={style.container} id={style.mycontainer}>
                            <form>
                                <div className="row">
                                    <label className={style.dmtxt}> Patient
                                        : </label> {/* Liste des Noms des patients */}
                                    <select name={"rdvId"} onChange={formik.handleSubmit}
                                            className={style.myselect}>
                                        {
                                            treatments.map((element, key) => {
                                                return (
                                                    <option key={key} className={style.myoption}
                                                            value={element._id}>
                                                        {element.patient[0].firstName} {element.patient[0].lastName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="row">
                                    <label className={style.dmtxt}>Traitement : </label>
                                    <textarea className={style.mytextarea} id="exampleFormControlTextarea1"
                                              defaultValue={""}/> {/* ajout du traitement ou bien modification */}
                                </div>

                                <div className="row">
                                    <label className={style.dmtxt}>Medicaments : </label>
                                    <textarea className={style.mytextarea} id="exampleFormControlTextarea1"
                                              defaultValue={""}/> {/* ajout des medocs ou bien modification */}
                                </div>

                                <div className="row">
                                    <div className="input-group">

                                        <div className="custom-file">

                                            <label className={style.dmtxt} htmlFor="inputGroupFile01">Ordonnance
                                                : </label>
                                            <input type="file" className="custom-file-input m-lg-2" id="mybtn"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mt-4">
                                    <button type="submit" className="btn-text" id="mybtn"> Enregistrer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='col-4'>
                        <img className={style.myimg} src={image1}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddPrescription;