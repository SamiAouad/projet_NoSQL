import style from '../css/Register.module.css'
import * as yup from 'yup'
import {useState} from "react";
import {useNavigate} from "react-router";
import {useFormik} from "formik";
import axios from 'axios';


const api = axios.create({
    baseURL: `http://localhost:5000/`
})

const DoctorRegister = () => {
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => end - idx)
    }

    const navigate = useNavigate();
    const [file, setFile] = useState()
    // const [error, setError] = useState('')

    const validationSchema = yup.object({
        code: yup.string('valeur invalid').required('ce champs est obligatoire'),
        firstName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        lastName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        phone: yup.string('valeur invalid').required('ce champs est obligatoire').min(10, "Numero invalid").max(10, "Numero invalide"),
        university: yup.string('valeur invalid').required('ce champs est obligatoire'),
        promotion: yup.string('valeur invalid').required('ce champs est obligatoire'),
        email: yup.string('valeur invalid').email("email invalid").required('ce champs est obligatoire'),
        specialty: yup.string('valeur invalid').required('ce champs est obligatoire'),
        city: yup.string('valeur invalid').required('ce champs est obligatoire'),
        street: yup.string('valeur invalid').required('ce champs est obligatoire'),
        password: yup.string('valeur invalid').required('ce champs est obligatoire')
            .min(8, 'Password is too short - should be 8 chars minimum.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
                , 'Mot de passe doit contenir au moins un chiffre une majuscule et une minuscule'),
        passwordConf: yup.string('valeur invalid').required('ce champs est obligatoire')
            .oneOf([yup.ref('password'), null], 'doit être le même que le mot de passe'),
    })

    const onSubmit = async () => {
        console.log('Onsubmit')
        let item = new FormData();
        item.append('code', formik.values.code)
        item.append('firstName', formik.values.firstName)
        item.append('lastName', formik.values.lastName)
        item.append('phone', formik.values.phone)
        item.append('university', formik.values.university)
        item.append('promotion', formik.values.promotion)
        item.append('specialty', formik.values.specialty)
        item.append('email', formik.values.email)
        item.append('city', formik.values.city)
        item.append('street', formik.values.street)
        item.append('password', formik.values.password)
        item.append('photo', file)
        try {
            await api.post('/api/doctor/create', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else {
                    navigate('/')
                }
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            code: '',
            firstName: '',
            lastName: '',
            phone: '',
            university: 'FMP Tanger',
            promotion: '2022',
            email: '',
            specialty: 'L’anesthésiologie',
            city: 'Casablanca',
            street: '',
            password: '',
            passwordConf: ''
        },
        onSubmit,
        validationSchema
    })


    return (
        <div className={style.register}>
            <div className={style.container}>
                <header>Registration</header>
                <form onSubmit={formik.handleSubmit}>
                    <div className={`${style.form} ${style.first}`}>
                        <div className={`${style.details}`}>
                            <span className={style.title}>Information personnel</span>

                            <div className={style.fields}>

                                <div className={style.inputField}>
                                    <label>Code</label>
                                    <input type="text" name={"code"} value={formik.values.code}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre nom' required/>
                                    {formik.errors.code ?
                                        <div className="text-danger">{formik.errors.code}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Nom</label>
                                    <input type="text" name={"lastName"} value={formik.values.lastName}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre nom' required/>
                                    {formik.errors.lastName ?
                                        <div className="text-danger">{formik.errors.lastName}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Prenom</label>
                                    <input type="text" name={"firstName"} value={formik.values.firstName}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre prenom ' required/>
                                    {formik.errors.firstName ?
                                        <div className="text-danger">{formik.errors.firstName}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Numero de telephone</label>
                                    <input type="text" name={"phone"} value={formik.values.phone}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre numero de telephone' required/>
                                    {formik.errors.phone ?
                                        <div className="text-danger">{formik.errors.phone}</div> : null}
                                </div>


                                <div className={style.inputField}>
                                    <label>Université</label>
                                    <select name="university" onChange={formik.handleChange}
                                            value={formik.values.university}>
                                        <option value="abd el malek essadi">FMP TANGER</option>
                                        <option value="universite Hassan II">FMP RABAT</option>
                                        <option value="abd el malek essadi">FMP AGADIR</option>
                                        <option value="universite Hassan II">FMP CASABLANCA</option>
                                        <option value="abd el malek essadi">FMP OUJDA</option>
                                        <option value="universite Hassan II">FMP MARRAKECH</option>
                                        <option value="abd el malek essadi">FMP FES</option>

                                    </select>
                                    {formik.errors.university ?
                                        <div className="text-danger">{formik.errors.university}</div> : null}
                                </div>
                                <div className={style.inputField}>
                                    <label>promo</label>
                                    <select name="promotion" onChange={formik.handleChange}
                                            value={formik.values.promotion}>
                                        {
                                            range(1949, 2022).map((element, key) => {
                                                return (
                                                    <option key={key} value={element}>{element}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {formik.errors.promotion ?
                                        <div className="text-danger">{formik.errors.promotion}</div> : null}
                                </div>
                            </div>
                        </div>

                        <div className={`${style.detail} ${style.Id}`}>
                            <span className={style.title}>Personal Identification</span>

                            <div className={style.fields}>

                                <div className={style.inputField}>
                                    <label>email</label>
                                    <input type="text" name={"email"} onChange={formik.handleChange}
                                           value={formik.values.email}
                                           placeholder=' exemple@test.com ' required/>
                                    {formik.errors.email ?
                                        <div className="text-danger">{formik.errors.email}</div> : null}

                                </div>

                                <div className={style.inputField}>
                                    <label>Specialité</label>
                                    <select name="specialty" onChange={formik.handleChange}
                                            value={formik.values.specialty}>
                                        <option value="L’anesthésiologie">L’anesthésiologie</option>
                                        <option value="L’andrologie">L’andrologie</option>
                                        <option value="cardiologie">cardiologie</option>
                                        <option value="chirurgie cardiaque">chirurgie cardiaque</option>
                                        <option value="chirurgie générale"> chirurgie générale</option>
                                        <option value="chirurgie pédiatrique">chirurgie pédiatrique</option>
                                        <option value="neurochirurgie">neurochirurgie</option>
                                        <option value="dermatologie">dermatologie</option>
                                        <option value="L’endocrinologie">L’endocrinologie</option>
                                        <option value="neurologie">neurologie</option>
                                    </select>
                                    {formik.errors.specialty ?
                                        <div className="text-danger">{formik.errors.specialty}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Ville</label>
                                    <select name="city" onChange={formik.handleChange} value={formik.values.city}>
                                        <option value="casablanca">Casablanca</option>
                                        <option value="rabat">rabat</option>
                                        <option value="Tanger">Tanger</option>
                                        <option value="Chaouen">Chaouen</option>
                                        <option value="Agadir">Agadir</option>
                                        <option value="Marrakech">Marrakech</option>
                                        <option value="Dakhla">Dakhla</option>
                                        <option value="Taza">Taza</option>
                                        <option value="Fes">Fes</option>
                                        <option value="Meknes">Meknes</option>
                                    </select>
                                    {formik.errors.city ?
                                        <div className="text-danger">{formik.errors.city}</div> : null}
                                </div>
                                <div className={style.inputField}>
                                    <label>Adresse</label>
                                    <input type="text" name={"street"} placeholder='Enterez votre adresse'
                                           onChange={formik.handleChange}
                                           value={formik.values.street} required/>
                                    {formik.errors.street ?
                                        <div className="text-danger">{formik.errors.street}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Password</label>
                                    <input type="password" name={"password"} value={formik.values.password}
                                           onChange={formik.handleChange} placeholder='Enter Password' required/>
                                    {formik.errors.password ?
                                        <div className="text-danger">{formik.errors.password}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Confirm Password</label>
                                    <input type="password" name={"passwordConf"} value={formik.values.passwordConf}
                                           onChange={formik.handleChange} placeholder='Confirm Password ' required/>
                                    {formik.errors.passwordConf ?
                                        <div className="text-danger">{formik.errors.passwordConf}</div> : null}
                                </div>
                                <div className={style.submitbtn}>
                                    <label>Photo : </label>
                                    <input type='file' id='photo' accept="image/png" onChange={e => {
                                        setFile(e.target.files[0]);
                                    }}/>
                                </div>
                            </div>
                        </div>

                        <button className={style.submitbtn} type={"submit"}>

                            <span className='btn-text'> Submit</span>
                            <i className='uil uil-navigator'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DoctorRegister;