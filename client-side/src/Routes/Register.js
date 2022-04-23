import style from '../css/Register.module.css'
import * as yup from 'yup'
import {useState} from "react";
import {useNavigate} from "react-router";
import { useFormik } from "formik";
import axios from 'axios';


const api = axios.create({
    baseURL: `http://localhost:5000/`
})

const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState()
    const [error, setError] = useState('')

    const validationSchema = yup.object({
        code: yup.string('valeur invalid').required('ce champs est obligatoire'),
        firstName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        lastName: yup.string('valeur invalid').required('ce champs est obligatoire'),
        phone: yup.string('valeur invalid').required('ce champs est obligatoire'),
        university: yup.string('valeur invalid').required('ce champs est obligatoire'),
        promotion: yup.string('valeur invalid').required('ce champs est obligatoire'),
        email: yup.string('valeur invalid').email("email invalid").required('ce champs est obligatoire'),
        specialty: yup.string('valeur invalid').required('ce champs est obligatoire'),
        city: yup.string('valeur invalid').required('ce champs est obligatoire'),
        street: yup.string('valeur invalid').required('ce champs est obligatoire'),
        password: yup.string('valeur invalid').required('ce champs est obligatoire'),
        passwordConf: yup.string('valeur invalid').required('ce champs est obligatoire'),
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
        try{
            await api.post('/doctor/create', item).then(res => {
                if (res.status === 500){
                    navigate('/error/500')
                }

                else
                    console.log('looking good')
            })
        }catch(message){
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            code: '',
            firstName: '',
            lastName: '',
            phone: '',
            university: '',
            promotion: '',
            email: '',
            specialty: '',
            city: '',
            street: '',
            password: '',
            passwordConf: ''
        },
        onSubmit,
        validationSchema
    })


    return (
        <div className='register'>
            <div className='container'>
                <header>Registration</header>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form first'>
                        <div className={`${style.details}`}>
                            <span className='title'>Information personnel</span>

                            <div className='fields'>

                                <div className='input-field'>
                                    <label>Code</label>
                                    <input type ="text" name={"code"} value={formik.values.code} onChange={formik.handleChange}
                                           placeholder='Entrez votre nom' required />
                                    {formik.errors.code ? <div className="text-danger">{formik.errors.code}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Nom</label>
                                    <input type ="text" name={"lastName"} value={formik.values.lastName} onChange={formik.handleChange}
                                           placeholder='Entrez votre nom' required />
                                    {formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Prenom</label>
                                    <input type ="text" name={"firstName"} value={formik.values.firstName} onChange={formik.handleChange}
                                           placeholder='Entrez votre prenom ' required />
                                    {formik.errors.firstName ? <div className="text-danger">{formik.errors.firstName}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Numero de telephone</label>
                                    <input type ="text" name={"phone"}  value={formik.values.phone} onChange={formik.handleChange}
                                           placeholder='Entrez votre numero de telephone' required />
                                    {formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
                                </div>


                                <div className='input-field'>
                                    <label>Université</label>
                                    <select name="university" onChange={formik.handleChange} value={formik.values.university}>
                                        <option value="abd el malek essadi">UAE</option>
                                        <option value="universite Hassan II">Hassan II</option>
                                    </select>
                                    {formik.errors.university ? <div className="text-danger">{formik.errors.university}</div> : null}
                                </div>
                                <div className='input-field'>
                                    <label>promo</label>
                                    <select name="promotion" onChange={formik.handleChange} value={formik.values.promotion}>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select>
                                    {formik.errors.promotion ? <div className="text-danger">{formik.errors.promotion}</div> : null}
                                </div>
                            </div>
                        </div>

                        <div className='details Id'>
                            <span className='title'>Personal Identification</span>

                            <div className='fields'>

                                <div className='input-field'>
                                    <label>email</label>
                                    <input type ="text" name={"email"} onChange={formik.handleChange} value={formik.values.email}
                                        placeholder=' exemple@test.com ' required />
                                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

                                </div>

                                <div className='input-field'>
                                    <label>Specialité</label>
                                    <select name="specialty" onChange={formik.handleChange} value={formik.values.specialty}>
                                        <option value="neurology">Neurologue</option>
                                        <option value="dermatology">Dermatologue</option>
                                    </select>
                                    {formik.errors.specialty ? <div className="text-danger">{formik.errors.specialty}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Ville</label>
                                    <select name="city" onChange={formik.handleChange} value={formik.values.city}>
                                        <option value="casablanca">Casablanca</option>
                                        <option value="rabat">rabat</option>
                                    </select>
                                    {formik.errors.city ? <div className="text-danger">{formik.errors.city}</div> : null}
                                </div>
                                <div className='input-field'>
                                    <label>Adresse</label>
                                    <input type ="text" name={"street"} placeholder='Enterez votre adresse' onChange={formik.handleChange}
                                           value={formik.values.street} required />
                                    {formik.errors.street ? <div className="text-danger">{formik.errors.street}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Password</label>
                                    <input type ="password" name={"password"} value={formik.values.password}
                                           onChange={formik.handleChange} placeholder='Enter Password' required />
                                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                                </div>

                                <div className='input-field'>
                                    <label>Confirm Password</label>
                                    <input type ="password" name={"passwordConf"} value={formik.values.passwordConf}
                                           onChange={formik.handleChange}  placeholder='Confirm Password ' required />
                                    {formik.errors.passwordConf ? <div className="text-danger">{formik.errors.passwordConf}</div> : null}
                                </div>
                                <div className='submitbtn'>
                                    <label>Photo</label>
                                    <input type='file' id='photo' accept="image/png" onChange={e => {
                                        setFile(e.target.files[0]);
                                        }}/>
                                </div>
                            </div>
                        </div>

                        <button className='submitbtn' type={"submit"}>

                            <span className='btn-text'> Submit</span>
                            <i className='uil uil-navigator'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;