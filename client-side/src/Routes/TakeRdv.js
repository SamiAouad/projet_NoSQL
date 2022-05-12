import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import * as yup from 'yup'
import axios from "axios";
import {useNavigate} from "react-router";
import style from '../css/TakeRdv.module.css'

const api = axios.create({
    baseURL: `https://app-gestion-medicale.herokuapp.com/`
})

function TakeRdv() {
    const navigate = useNavigate()
    const [doctor, setDoctor] = useState({})
    const [patient, setPatient] = useState({})
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('doctor')))
        setDoctor(JSON.parse(localStorage.getItem('doctor')))
        setPatient(JSON.parse(localStorage.getItem('user')))
    }, [])
    const validationSchema = yup.object({
        urgent: yup.number('valeur invalid').required('ce champs est obligatoire'),
        date: yup.date('valeur invalid').required('ce champs est obligatoire'),
        description: yup.string('valeur invalid').required('ce champs est obligatoire')
    })
    const onSubmit = async () => {
        console.log('Onsubmit')
        let item = new URLSearchParams();
        item.append('patientId', patient._id)
        item.append('doctorId', doctor._id)
        item.append('description', formik.values.description)
        item.append('urgent', formik.values.urgent)
        item.append('date', formik.values.date)
        console.log(item)
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
            urgent: 0,
            description: '',
            period: ''
        },
        onSubmit,
        validationSchema
    })

    return (
        <div className={style.center}>
            <div className="row" id={style.myrow}>
                <div className="col">
                    <div className={style.container} id={style.mycontainer}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label>Pour Quand le Rendez-Vous ?</label>
                                    <input type="date" name={"date"} value={formik.values.date}
                                           onChange={formik.handleChange}
                                           className="form-control" placeholder="Quand  ?"/>
                                </div>
                                <div className="col">
                                    <label>Quels Sont vos Symptoms ?</label>
                                    <textarea name={"description"} value={formik.values.description}
                                              onChange={formik.handleChange}
                                              className="form-control"/>
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <div className='col'>
                                        <label>Choisissez la Période </label>
                                        <select className="form-select" value={formik.values.period}
                                                onChange={formik.handleChange}
                                                aria-label="Default select example">
                                            <option selected>Matinée</option>
                                            <option value="1">Aprés-Midi</option>
                                        </select>
                                    </div>
                                    <div className='col'>
                                        <legend className="col-form-label " id={style.myradio}>Urgence</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" onChange={formik.handleChange}
                                                       type="radio" name="urgent" value="1" checked/>
                                                <label className="form-check-label">
                                                    Urgence sans risque
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" onChange={formik.handleChange}
                                                       type="radio" name="urgent" value="2"/>
                                                <label className="form-check-label">
                                                    Ugrence Vitale
                                                </label>
                                            </div>

                                            <div className="form-check ">
                                                <input className="form-check-input" onChange={formik.handleChange}
                                                       type="radio" name="urgent" value="3"/>
                                                <label className="form-check-label">
                                                    Simple Consultation
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </fieldset>

                            <div className="col">
                                <button type="submit" className="btn-text" id="mybtn"> Prendre Rendez Vous !</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TakeRdv;