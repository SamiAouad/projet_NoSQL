import style from '../css/DetailPatients.module.css'
import image from '../images/detailspatient/Agnaou.png'
import {Form, ProgressBar, Table} from 'react-bootstrap'
import {useNavigate, useParams} from "react-router";
import {useState} from "react";
import axios from "axios";
import React, {useEffect} from "react";
import AddPrescription from "./GestionPatient/AddPrescription";
import CreateAppoinment from "./GestionPatient/CreateAppoinment";

const DetailPatient = () => {
    const [consultations, setConsultations] = useState([])
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const params = useParams()
    const [treatment, setTreatment] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })
    const [file, setFile] = useState()

    const addPrescription = async () => {
        const item = new URLSearchParams();
        item.append("photo", file)
        item.append("treatmentId", treatment[0]._id)
        try {
            await api.post('/treatment/add/prescription', item)
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
        const getPatient = async () => {
            try {
                const result = await api.get(`treatment/${params.id}`)
                if (result.status === 200) {
                    setLoading(false)
                    setTreatment(result.data[0])
                    await getConsultations(result.data[0].patientId)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        const getConsultations = async (patientId) => {
            try {
                const result = await api.get(`treatment/patient/${patientId}`)
                if (result.status === 200) {
                    setLoading(false)
                    console.log(result.data)
                    setConsultations(result.data)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }


        getPatient()
    }, [])

    if (loading)
        return <p>Loading</p>

    if (loading)
        return <div>Loading</div>
    return (
        <div>
            <section className={style.mysection}>
                <h3 className={style.title}> Detail Patient </h3>
                <div className='row' id={style.myrow}>
                    <div className='col-4'>
                        <div>
                            <img className={style.myimage}
                                 src={`data:image/jpeg;base64,${treatment.patient[0].photo.data}`}/>
                        </div>
                        <div>
                            <h3 className={style.subtitle}> AGNAOU MOHAMED
                            </h3>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className={style.mycontainer}>
                            <div className='row'>
                                <div className='col'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>CNI Patient</Form.Label>
                                        <Form.Control classNAme='myfield' placeholder={treatment.patient[0].cni}
                                                      disabled/>
                                    </Form.Group>
                                </div>
                                <div className='col'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>N° Dossier</Form.Label>
                                        <Form.Control placeholder="Disabled input" disabled/>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Created At : </Form.Label>
                                        <Form.Control classNAme='myfield' placeholder="Disabled input" disabled/>
                                    </Form.Group>
                                </div>
                                <div className='col'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Updated At </Form.Label>
                                        <Form.Control placeholder="Disabled input" disabled/>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className={style.myprogress}>
                                    <label> Retablissement : </label>
                                    <ProgressBar variant="success" now={70}/>
                                    <label> Traitement : </label>
                                    <ProgressBar variant="info" now={30}/>
                                    <label> Symptomes : </label>
                                    <ProgressBar variant="warning" now={40}/>
                                    <label> Signes Critiques : </label>
                                    <ProgressBar variant="danger" now={10}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.mysecondsection}>
                <div className='row'>
                    <div className='col-4'>
                        <h3 className={style.title} id={style.mytxtHI}> Historique des Consultaions </h3>
                    </div>
                    <div className='col-7'>
                        <Table id={style.mytable} responsive="md">
                            <thead className={style.thead}>
                            <tr>
                                <th>#</th>
                                <th>Code Docteur</th>
                                <th>Nom Docteur</th>
                                <th>Date</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody className={style.tbody}>
                            {
                                consultations.map((consultation, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{consultation.doctor[0].code}</td>
                                            <td>{consultation.doctor[0].firstName} {consultation.doctor[0].lastName}</td>
                                            <td>{consultation.rdv[0] ? consultation.rdv[0].date : "introuvable"}</td>
                                            <td>{consultation.rdv[0] ? consultation.rdv[0].description : "introuvable"}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>

                    </div>
                </div>

            </section>
            <AddPrescription treatmentId={params.id}/>
            <CreateAppoinment treatmentId={params.id}/>
        </div>

    );
}

export default DetailPatient;