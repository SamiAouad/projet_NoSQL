import style from '../../asset/css/style.module.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

const Patients = () => {
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

    const [consultations, setConsultations] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)
    const api = axios.create({
        baseURL: 'https://app-gestion-medicale.herokuapp.com/'
    })

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getConsultations = async () => {
            try {
                const result = await api.post('/api/doctor/consultation/', {doctorId: user._id})
                if (result.status === 200) {
                    setConsultations(result.data)
                    setLoading(false)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error: ", ex)
            }
        }
        getConsultations()
    }, [])
    if (loading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div>
            <section className={`${style.course} ${style.pagebg}`} id={style.course}>
                <p className={style.sectionsubtitle}>Mes Patients</p>
                <div className='row'>
                    <div className='col-10'>
                        <h2 className={style.sectiontitle}>Voici La Liste de Vos Patients </h2>
                    </div>
                </div>
                <div className={style.coursegrid}>

                    <div className='row'>
                        {
                            listToMatrix(consultations, 3).map((list) => {
                                return (
                                    <div className={"row"}>
                                        {
                                            list.map((consultation, key) => {
                                                return (
                                                    <div key={key} className='col-4'>
                                                        <div className={style.coursecard}>
                                                            <div className={style.coursebanner}>
                                                                <img alt={'image'}
                                                                     src={`data:image/jpeg;base64,${consultation.patient[0].photo.data}`}/>
                                                                <div className={style.coursetagbox}>
                                                                    <a href={`/doctor/treatment/${consultation._id}`}
                                                                       className={`${style.badgetag} ${style.orange} ${style.textdecorationnone}`}> +
                                                                        Detail</a>
                                                                </div>
                                                            </div>
                                                            <div className={style.coursecontent}>
                                                                <h3 className={style.cardtitle}>
                                                                    <p>N° Dossier : {key}</p>
                                                                </h3>
                                                                <div
                                                                    className={`${style.wrapper} ${style.borderbottom}`}>
                                                                    <div className={`row ${style.author}`}>
                                                                        <a href="#"
                                                                           className={`${style.authorname} ${style.textdecorationnone}`}>
                                                                            Nom: {consultation.patient[0].firstName} {consultation.patient[0].lastName}
                                                                        </a>
                                                                    </div>
                                                                    <div className={`row ${style.author}`}>
                                                                        <a href="#"
                                                                           className={`${style.authorname} ${style.textdecorationnone}`}>
                                                                            Date de
                                                                            naissance: {consultation.patient[0].birthday.substr(0, 10)}
                                                                        </a>
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

                                /*return (
                                     <div key={key}>
                                       <div className='col'>
                                         <div className={style.coursecard}>
                                           <div className={style.coursebanner}>
                                             <img alt={'image'} src={`data:image/jpeg;base64,${consultation.patient[0].photo.data}`}/>
                                             <div className={style.coursetagbox}>
                                               <a href="#" className={`${style.badgetag} ${style.orange} ${style.textdecorationnone}`}> + Detail</a>
                                             </div>
                                           </div>
                                           <div className={style.coursecontent}>
                                             <h3 className={style.cardtitle}>
                                               <p>N° Dossier : {key}</p>
                                             </h3>
                                             <div className={`${style.wrapper} ${style.borderbottom}`}>
                                               <div className={style.author}>
                                                 <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>
                                                   {consultation.patient[0].firstName} {consultation.patient[0].lastName}
                                                 </a>
                                               </div>
                                             </div>
                                             <div className={style.wrapper}>
                                               <div className={style.courseprice}>
                                                 <p className={style.authorname}>Suivie </p>
                                                 <p className={style.authorname}>Traitement </p>
                                                 <p className={style.authorname}>Amélioration </p>
                                               </div>
                                               <div>
                                                 <p> </p>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                 )*/
                            })
                        }
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Patients;