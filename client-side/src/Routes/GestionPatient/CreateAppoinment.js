import style from '../../asset/css/style.module.css'
import image from '../../asset/images/Doctor.jpg'
import * as yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";

const api = axios.create({
    baseURL: `https://app-gestion-medicale.herokuapp.com/`
})

const CreateAppoinement = ({treatmentId}) => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const user = localStorage.getItem('user')
    const validationSchema = yup.object({})

    const onSubmit = async () => {
        console.log("submitting")
        let item = new URLSearchParams();
        item.append('treatmentId', treatmentId)
        item.append('date', formik.values.date)
        item.append('description', formik.values.description)
        item.append('period', formik.values.period)
        try {
            await api.post('/api/treatment/appointment', item).then(res => {
                if (res.status === 500) {
                    setError('insertion failed')
                } else if (res.data === false)
                    setError('insertion failed')
                else {
                    setSuccess('insertion successful')
                }
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            date: '',
            period: '',
            description: '',
            urgency: ''
        },
        onSubmit,
        validationSchema
    })
    return (
        <div>
            <section className={style.event}>
                <div className={style.eventleft}>
                    <div className='row'>
                        <div className='col-7'>
                            <div className={style.eventright}>
                                <p className={style.sectionsubtitle}>Nouveaux Rendez Vous </p>
                                <div className={style.eventcardgroup}>
                                    <div className={`${style.eventcard} ${style.bg}`}>
                                        <div>
                                            <div className={style.center}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className={style.container} id={style.mycontainer}>
                                                            <form onSubmit={formik.handleSubmit}>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <label> Pour Quand le Rendez-Vous ?</label>
                                                                        <input name={"date"} type="date"
                                                                               value={formik.values.date}
                                                                               onChange={formik.handleChange}
                                                                               className="form-control"
                                                                               placeholder="Quand  ?"/>
                                                                        {formik.errors.date ? <div
                                                                            className="text-danger">{formik.errors.date}</div> : null}
                                                                    </div>
                                                                    <div className="col">
                                                                        <label>Motifs</label>
                                                                        <textarea className="form-control"
                                                                                  name={"description"}
                                                                                  value={formik.values.description}
                                                                                  onChange={formik.handleChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <fieldset className="form-group">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <label>Choisissez la Période </label>
                                                                            <select className="form-select"
                                                                                    name={"period"}
                                                                                    value={formik.values.period}
                                                                                    onChange={formik.handleChange}
                                                                                    aria-label="Default select example">
                                                                                <option value={"matin"}
                                                                                        selected>Matinée
                                                                                </option>
                                                                                <option
                                                                                    value={"après-midi"}>Aprés-Midi
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="col">
                                                                            <legend className="col-form-label "
                                                                                    id="myradio">Urgence
                                                                            </legend>
                                                                            <div className="col-sm-10">
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input"
                                                                                           value="1"
                                                                                           onChange={formik.handleChange}
                                                                                           type="radio" name="urgency"
                                                                                           id="gridRadios1"
                                                                                           defaultValue="option1"
                                                                                           defaultChecked/>
                                                                                    <label className="form-check-label"
                                                                                           htmlFor="gridRadios1">
                                                                                        Urgence sans risque
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input"
                                                                                           value="2"
                                                                                           onChange={formik.handleChange}
                                                                                           type="radio" name="urgency"
                                                                                           id="gridRadios2"
                                                                                           defaultValue="option2"/>
                                                                                    <label className="form-check-label"
                                                                                           htmlFor="gridRadios2">
                                                                                        Ugrence Vitale
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check ">
                                                                                    <input className="form-check-input"
                                                                                           value="3"
                                                                                           onChange={formik.handleChange}
                                                                                           type="radio" name="urgency"
                                                                                           id="gridRadios3"
                                                                                           defaultValue="option3"/>
                                                                                    <label className="form-check-label"
                                                                                           htmlFor="gridRadios3">
                                                                                        Simple Consultation
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                                <div className="col">
                                                                    <button type="submit" className="btn-text"
                                                                            id="mybtn"> Enregistrer
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    className={"text-success"}>{success ? success : null}</div>
                                                                <div
                                                                    className={"text-alert"}>{error ? error : null}</div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className={style.eventbanner}>
                                <img src={image} alt="event banner" className={style.bannerimg}/>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default CreateAppoinement;