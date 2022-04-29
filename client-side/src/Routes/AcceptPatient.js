import style from '../asset/css/style.module.css'
import image from '../asset/images/Agnaou.png'
import image1 from '../asset/images/PatientPatient.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import NavbarDoctor from "./NavbarDoctor";
import * as yup from "yup";
import {useFormik} from "formik";

const AcceptPatient = () => {
    const [rdv, setRdv] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)

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
        baseURL: 'http://localhost:5000'
    })


    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else if (user.cni)
            navigate('/doctor/register')
        const getRdv = async () => {
            try {
                const result = await api.post('doctor/rdv/', {doctorId: user._id})
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
    }, [])
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
                                                            <button type='submit'
                                                                    className='btn-bg-danger mt-2'> Accepter
                                                            </button>
                                                            <button type='submit'
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