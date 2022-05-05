import style from '../css/Amelioration.module.css'
import {Table} from 'react-bootstrap';
import file from '../Prescription/TestOrdonnance.pdf'
import logo from '../images/amelioration/Image.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

const Amelioration = () => {
    const [treatments, setTreatments] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        if (!user)
            navigate('/')
        if (user.code)
            navigate('/')
        const getTreatments = async () => {
            const result = await api.get(`/treatment/patient/${user._id}`)
            console.log('consultations: ', result.data)
            setTreatments(result.data)
            setLoading(false)
        }
        getTreatments()
    }, [])
    const PatientData = [
        {
            id: "1",
            NumDossier: "P1110",
            Doctor: "AHMAD TAZI",
            Date: "12/09/2021",
            Medicament: "Doliprane-Rhumix",
            Duree: "1 mois",
        },
        {
            id: "2",
            NumDossier: "P1110",
            Doctor: " BENANI SMIRES",
            Date: "12/09/2021",
            Medicament: "Astrazeneka-Ansuline",
            Duree: "2 semaine"
        },
        {
            id: "3",
            NumDossier: "P1110",
            Doctor: " LGEZAR",
            Date: "12/09/2021",
            Medicament: "VitamineC-VitamineD",
            Duree: "3 semaine"
        },
        {id: "4", NumDossier: "P1110", Doctor: " LBENJ", Date: "12/09/2021", Medicament: "EAU ", Duree: "5 mois"},
    ]
    return (
        <div>
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
                                            <td>{key}</td>
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
            <section className={style.mysecsection}>
                <div className='row'>
                    <div className='col-6'>
                        <h4 className={style.mysectitle}>Veuillez Sairee vos Symptomes aupres de votre
                            specialiste <br/> Afin qu'il puisse suivre vos ameliorations </h4>
                        <p className={style.myfourthtitle}>Nom de Votre Medecin
                            : </p> {/* la liste des Medecins dialo */}
                        <select class="custom-select" id={style.myinputSelect}>
                            <option selected>AHMAD TAZI</option>
                            <option value="1">BENANI SMIRES</option>
                            <option value="2">LGEZAR</option>
                            <option value="3">LBENJ</option>
                        </select>
                        <div className='row'>
                            <div className='col-6'>
                                <p className={style.mysectext}>Etat de votre Traitement , y-a-t-il des Symptomes
                                    Secondaire ?</p>
                                <select class="custom-select" id={style.mysecinputSelect}>
                                    <option selected>oui</option>
                                    <option value="1">non</option>
                                    <option value="2">je me sens pas bien</option>
                                    <option value="3">Aucune idee</option>
                                </select>
                            </div>
                            <div className='col-6'>
                                <p className={style.mysectext}>A l'echelle de (1-10) comment jugez-vous votre état </p>
                                <select class="custom-select" id={style.mysecinputSelect}>
                                    <option selected>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="2">4</option>
                                    <option value="2">5</option>
                                    <option value="2">6</option>
                                    <option value="2">7</option>
                                    <option value="2">8</option>
                                    <option value="2">9</option>
                                    <option value="2">10</option>
                                </select>
                            </div>

                        </div>

                        <div className='col-6'>
                            <p className={style.mysectext}>Au cours des dernières 24 heures, avez-vous ressenti un
                                Rétablissement ? a l'echelle de 1 a 10 </p>
                            <select class="custom-select" id={style.mysecinputSelect}>
                                <option selected>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="2">4</option>
                                <option value="2">5</option>
                                <option value="2">6</option>
                                <option value="2">7</option>
                                <option value="2">8</option>
                                <option value="2">9</option>
                                <option value="2">10</option>
                            </select>
                        </div>
                        <button className={style.mybutton} role="button">Enregistrer</button>

                    </div>
                    <div className='col-6'>
                        <img src={logo} id={style.mysecimg}/>
                    </div>
                </div>
            </section>
        </div>);
}

export default Amelioration