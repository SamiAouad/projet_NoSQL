import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import * as yup from 'yup'
import axios from "axios";
import {useNavigate} from "react-router";
import style from '../css/TakeRdv.module.css'

const api = axios.create({
    baseURL: `http://localhost:5000/`
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
        console.log("patient:", patient.cni)
        console.log("doctor:", doctor.code)
        item.append('patientCni', patient.cni)
        item.append('doctorCode', doctor.code)
        item.append('description', formik.values.description)
        item.append('urgent', formik.values.urgent)
        item.append('date', formik.values.date)
        console.log(item)
        try{
            await api.post('/rdv/create', item).then(res => {
                if (res.status === 500){
                    navigate('/error/500')
                }
                else
                    navigate('/home')
            })
        }catch(message){
            navigate('/error/500')
        }finally {
            localStorage.removeItem('doctor')
        }

    }
    const formik = useFormik({
        initialValues: {
            date: '',
            urgent: 0,
            description: ''
        },
        onSubmit,
        validationSchema
    })

    return (
    <div className={style.center}>
        <div className="row" id={style.myrow}>
            <div className="col">
                <div className={style.container} id={style.mycontainer}>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label>Pour Quand le Rendez-Vous ?</label>
                                <input type="date" className="form-control" placeholder="Quand  ?" />
                            </div>
                            <div className="col">
                                <label>Quels Sont vos Symptoms ?</label>
                                <textarea className="form-control" id={style.exampleFormControlTextarea1} />
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <div className='col'>
                                    <label>Choisissez la Période </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Matinée</option>
                                        <option value="1">Aprés-Midi</option>

                                    </select>
                                </div>
                                <div className='col'>
                                    <legend className="col-form-label " id={style.myradio}>Urgence</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id={style.gridRadios1} value="1" checked />
                                            <label className="form-check-label">
                                                Urgence sans risque
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id={style.gridRadios2} value="2" />
                                            <label className="form-check-label">
                                                Ugrence Vitale
                                            </label>
                                        </div>

                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" name="gridRadios" id={style.gridRadios3} value="3" />
                                            <label className="form-check-label">
                                                Simple Consultation
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </fieldset>

                        <div className="col">
                            <button type="submit" className="btn-text" id="mybtn"> Prendre Rendez Vous ! </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TakeRdv;