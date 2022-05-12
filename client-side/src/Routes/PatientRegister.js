import style from '../css/Register.module.css'
import * as yup from 'yup'
import {useState} from "react";
import {useNavigate} from "react-router";
import {useFormik} from "formik";
import axios from 'axios';


const api = axios.create({
    baseURL: `https://applicationgestionmedicale.herokuapp.com/`
})

const DoctorRegister = () => {

    const navigate = useNavigate();
    const [file, setFile] = useState()
    // const [error, setError] = useState('')

    const validationSchema = yup.object({
        cni: yup.string('valeur invalid').required('ce champs est obligatoire'),
        firstName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        lastName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        phone: yup.string('valeur invalid').required('ce champs est obligatoire').min(10, "Numero invalid").max(10, "Numero invalide"),
        email: yup.string('valeur invalid').email("email invalid").required('ce champs est obligatoire'),
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
        console.log(formik.values)
        let item = new FormData();
        item.append('cni', formik.values.cni)
        item.append('firstName', formik.values.firstName)
        item.append('lastName', formik.values.lastName)
        item.append('phone', formik.values.phone)
        item.append('email', formik.values.email)
        item.append('city', formik.values.city)
        item.append('street', formik.values.street)
        item.append('password', formik.values.password)
        item.append('birthday', formik.values.birthday)
        item.append("gender", formik.values.gender)
        item.append('photo', file)
        try {
            await api.post('/api/patient/create', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else
                    navigate('/')
            })
        } catch (message) {
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            cni: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            city: 'casablanca',
            street: '',
            password: '',
            passwordConf: '',
            birthday: '',
            gender: 'm'
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
                                    <label>CNI</label>
                                    <input type="text" name={"cni"} value={formik.values.cni}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre CNI' required/>
                                    {formik.errors.cni ?
                                        <div className="text-danger">{formik.errors.cni}</div> : null}
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
                                    <label>Date de naissance</label>
                                    <input type="date" name={"birthday"} value={formik.values.birthday}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre nom' required/>
                                    {formik.errors.birthday ?
                                        <div className="text-danger">{formik.errors.birthday}</div> : null}
                                </div>

                                <div className={style.inputField}>
                                    <label>Numero de telephone</label>
                                    <input type="text" name={"phone"} value={formik.values.phone}
                                           onChange={formik.handleChange}
                                           placeholder='Entrez votre numero de telephone' required/>
                                    {formik.errors.phone ?
                                        <div className="text-danger">{formik.errors.phone}</div> : null}
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
                                    <label>Sexe</label>
                                    <select name="gender" onChange={formik.handleChange} value={formik.values.gender}>
                                        <option value="m">M</option>
                                        <option value="f">F</option>
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