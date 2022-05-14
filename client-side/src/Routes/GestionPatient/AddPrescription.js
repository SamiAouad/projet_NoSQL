import React, {useEffect, useState} from 'react';
import style from "../../asset/css/style.module.css";
import image1 from "../../asset/images/PatientPatient.png";
import axios from "axios";
import * as yup from "yup";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {Table} from "react-bootstrap";

const api = axios.create({
    baseURL: `https://app-gestion-medicale.herokuapp.com/`
})

function AddPrescription({treatmentId}) {
    const [meds, setMeds] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState("")
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [file, setFile] = useState()

    const uploadPrescriptionPhoto = async () => {
        const item = new FormData();
        item.append("file", file)
        item.append("treatmentId", treatmentId)
        try {
            await api.post('/api/treatment/add/prescription', item)
            setSuccess("Préscription Ajoutée")
        } catch (ex) {
            console.log(ex)
            setError("une erreur s'est survenue")
        }
    }

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getMeds = async () => {
            try {
                const result = await api.get(`/api/treatment/meds/${treatmentId}`, {doctorId: user._id})
                console.log("meds: ", result.data)
                if (result.status === 200) {
                    console.log(result.data)
                    setMeds(result.data)
                    setLoading(false)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getMeds()
    }, [refresh])

    const validationSchema = yup.object({
        name: yup.string('valeur invalid').required('ce champs est obligatoire'),
        dose: yup.number('valeur invalid').required('ce champs est obligatoire'),
        unit: yup.string('valeur invalid').required('ce champs est obligatoire'),
        when: yup.string('valeur invalid').required('ce champs est obligatoire'),
        duration: yup.number('valeur invalid').required('ce champs est obligatoire'),
        description: yup.string('valeur invalid').required('ce champs est obligatoire'),
    })

    const onSubmit = async () => {
        let item = new URLSearchParams();
        item.append('treatmentId', treatmentId)
        item.append('name', formik.values.name)
        item.append('dose', formik.values.dose)
        item.append('unit', formik.values.unit)
        item.append('when', formik.values.when)
        item.append('duration', formik.values.duration)
        item.append('description', formik.values.description)
        try {
            await api.post('/api/treatment/add/med', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else {
                    setRefresh(!refresh)
                }
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            name: '',
            dose: '',
            unit: 'g',
            when: '',
            duration: '',
            description: '',
        },
        onSubmit,
        validationSchema
    })
    if (loading)
        return <div>Loading</div>

    return (
        <div>
            <section className={style.features}>
                <div className={`${style.featuresleft}`}>
                    <h2 className={style.sectiontitle}>Création Dossier Médicale </h2>
                    <div className='row'>
                        <div className='col-3'>
                            <img className={style.myimg} src={image1}/>
                        </div>
                        <div className='col-5'>
                            <div className={style.container} id={style.mycontainer}>
                                <form onSubmit={formik.handleSubmit}>

                                    <div className="row">
                                        <label className={style.dmtxt}>Nom De Medicament : </label>
                                        <input type={"text"} className={style.mytextarea} name={"name"}
                                               value={formik.values.name} onChange={formik.handleChange}/>
                                    </div>

                                    <div className="row">
                                        <label className={style.dmtxt}>Dose : </label>
                                        <input type={"text"} className={style.mydose} name={"dose"}
                                               value={formik.values.dose} onChange={formik.handleChange}/>

                                        <select className={style.mydose} name={"unit"}
                                                value={formik.values.unit} onChange={formik.handleChange}>
                                            <option value="g">g</option>
                                            <option value="mg">mg</option>
                                        </select>
                                    </div>

                                    <div className="row">
                                        <label className={style.dmtxt}>Quand : </label>
                                        <input type={"text"} className={style.mytextarea} name={"when"}
                                               value={formik.values.when} onChange={formik.handleChange}/>
                                    </div>

                                    <div className="row">
                                        <label className={style.dmtxt}>Durée en jours : </label>
                                        <input type={"text"} className={style.mytextarea} name={"duration"}
                                               value={formik.values.duration} onChange={formik.handleChange}/>
                                    </div>

                                    <div className="row">
                                        <label className={style.dmtxt}>Description suplémentaire : </label>
                                        <textarea className={style.mytextarea} name={"description"}
                                                  value={formik.values.description} onChange={formik.handleChange}/>
                                    </div>
                                    <div className="col-4 mt-4">
                                        <button type="submit" className="btn-text" id="mybtn"> Ajouter</button>
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
            <section className={style.mysection}>
                <div className="row">
                    <div className='col-4'>
                        <h1 className={style.title}> Ajouter Une Préscription Pour ce Patient : </h1>
                        <div className={style.mysecondcontainer}>
                            <div className="custom-file">
                                <label className={style.dmsecondtxt} htmlFor="inputGroupFile01">Ordonnance
                                    : </label>
                                <input type='file' id='photo' accept="image/png" onChange={e => {
                                    setFile(e.target.files[0]);
                                }}/>
                                <button onClick={uploadPrescriptionPhoto}
                                        className="custom-file-input m-lg-2">Upload
                                </button>
                            </div>
                        </div>
                        {success ? <div className={"text-success"}>{success}</div> : null}
                    </div>
                    <div className='col-8'>
                        <div>
                            <div className='row'>
                                <h1 className={style.secondtitle}>Historique de Prescriptions : </h1>
                                <div className='col'>
                                    <Table id={style.mytable} responsive="md">
                                        <thead className={style.mythead}>
                                        <tr>
                                            <th className={"text-white"}>#</th>
                                            <th className={"text-white"}>Nom</th>
                                            <th className={"text-white"}>Dose</th>
                                            <th className={"text-white"}>Quand</th>
                                            <th className={"text-white"}>Durée</th>
                                            <th className={"text-white"}>Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className={style.tbody}>
                                        {
                                            meds ?
                                                meds.map((med, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className={"text-white"}>{key + 1}</td>
                                                            <td className={"text-white"}>{med.name}</td>
                                                            <td className={"text-white"}>{med.dose}{med.unit}</td>
                                                            <td className={"text-white"}>{med.when}</td>
                                                            <td className={"text-white"}>{med.duration}</td>
                                                            <td className={"text-white"}>{med.description}</td>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>


        </div>


    );
}

export default AddPrescription;