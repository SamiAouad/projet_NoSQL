import style from '../asset/css/style.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import NavbarDoctor from "./NavbarDoctor";

const AcceptPatient = () => {
    const [rdv, setRdv] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const acceptRdv = async (rdv) => {
        console.log(rdv)
        const item = new URLSearchParams()
        item.append("patientId", rdv.patientId)
        item.append("doctorId", rdv.doctorId)
        item.append("rdvId", rdv._id)
        try {
            const result = await api.post("/api/treatment/create", item)
            if (result.status === 500)
                navigate('/error/500')
            else {
                setRefresh(!refresh)
            }
        } catch (ex) {
            console.log(ex)
            navigate('/error/500')
        }
    }
    const refuseRdv = (rdv) => {
        console.log("refuse ", rdv)
    }

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

    const navigate = useNavigate()
    const api = axios.create({
        baseURL: 'https://applicationgestionmedicale.herokuapp.com/'
    })


    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getRdv = async () => {
            try {
                const result = await api.get(`/api/doctor/rdv/demands/${user._id}`)
                if (result.status === 200) {
                    setRdv(result.data)
                    setLoading(false)
                } else
                    navigate(`/doctor/register`)
            } catch (ex) {
                navigate(`/error/500`)
                console.log("error")
            }
        }
        getRdv()
    }, [refresh])
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <div>
            <NavbarDoctor/>
            <section className={`${style.course} ${style.pagebg}`} id={style.course}>
                <p className={style.sectionsubtitle}>Liste des Demandes</p>
                <div className={style.coursegrid}>
                    {
                        listToMatrix(rdv, 3).map(line => {
                            return (
                                <div className='row'>
                                    {
                                        line.map(col => {
                                            return (
                                                <div className='col-4'>
                                                    <div className={style.coursecard}>
                                                        <div className={style.coursebanner}>
                                                            <img
                                                                src={`data:image/jpeg;base64,${col.patient[0].photo.data}`}
                                                                alt="course banner"/>
                                                            <button onClick={() => acceptRdv(col)}
                                                                    className='btn-bg-danger mt-2'> Accepter
                                                            </button>
                                                            <button onClick={refuseRdv}
                                                                    className='btn-bg-danger m-lg-2'> Decliner
                                                            </button>

                                                        </div>

                                                        <div className={style.coursecontent}>

                                                            <h3 className={style.cardtitle}>
                                                                <p>{col.patient[0].firstName} {col.patient[0].lastName}</p>
                                                            </h3>
                                                            <div className={`${style.wrapper} ${style.borderbottom}`}>
                                                                <div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Date de Naissance</div>
                                                                        <div
                                                                            className={"col-6"}>{col.patient[0].dateNaissance}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Sexe:</div>
                                                                        <div
                                                                            className={"col-6"}>{col.patient[0].gender}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Email:</div>
                                                                        <div
                                                                            className={"col-6"}>{col.patient[0].email}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Telephone:</div>
                                                                        <div
                                                                            className={"col-6"}>{col.patient[0].phone}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={style.wrapper}>
                                                                <div className={style.courseprice}>
                                                                    <p className={style.authorname}>Mes Symptoms</p>
                                                                    <p className={style.authorname}>
                                                                        {col.description}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p></p>
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
                        })
                    }
                </div>

            </section>

        </div>
    );
}

export default AcceptPatient;