import styleSign from '../css/SignIn.module.css';
import {Form, Button} from 'react-bootstrap';
import image from '../images/signIn/PatientPatient.png'
import axios from "axios";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";

const api = axios.create({
    baseURL: `https://app-gestion-medicale.herokuapp.com/`
})

const SignIn = () => {
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const validationSchema = yup.object({
        email: yup.string('valeur invalid').email("email invalid").required('ce champs est obligatoire'),
        password: yup.string('valeur invalid').required('ce champs est obligatoire'),
    })

    const onSubmit = async () => {
        console.log('Onsubmit')
        setLoading(true)
        let item = new URLSearchParams();
        item.append('email', formik.values.email)
        item.append('password', formik.values.password)
        try {
            await api.post('/api/login', item).then(res => {
                if (res.status === 500) {
                    navigate('/error/500')
                } else if (res.data === false) {
                    setError('Email ou mot de passe incorrect')
                    setLoading(false)
                    setRefresh(!refresh)
                } else {
                    delete res.data.photo
                    localStorage.setItem('user', JSON.stringify(res.data));
                    navigate('/')
                }
            })
        } catch (message) {
            console.log("message: ", message)
            navigate('/error/500')
        }

    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
        validationSchema
    })
    if (loading)
        return (
            <div>Loading</div>
        )
    return (
        <div>
            <section className={styleSign.mysection}>
                <div className={'row ' + styleSign.content}>
                    <div className='col-md-6 mb-3'>
                        <img src={image} className='img-fluid'/>
                    </div>
                    <div className='col-md-6'>
                        <div className={styleSign.content2}>
                            <h3 className='signin-text mb-3 text-center'> Bienvenue a HEALTHO </h3>
                            <Form className='col-centered' onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-dark'>Email address</Form.Label>
                                    <Form.Control name={'email'} onChange={formik.handleChange}
                                                  value={formik.values.email}
                                                  className='bg-transparent ' type="email" placeholder="Enter email"/>
                                    {formik.errors.email ?
                                        <div className="text-danger">{formik.errors.email}</div> : null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-dark'>Password</Form.Label>
                                    <Form.Control name={'password'} onChange={formik.handleChange}
                                                  value={formik.values.password}
                                                  className='bg-transparent ' type="password" placeholder="Password"/>
                                    {formik.errors.password ?
                                        <div className="text-danger">{formik.errors.password}</div> : null}
                                </Form.Group>

                                <Button type="submit" className={styleSign.mybutton}>
                                    Submit
                                </Button>
                                <div className='my-3'>
                                <span>Don't Have an account ?
                                    <a href='/doctor/register'
                                       className={styleSign.mybutton}> Register As Doctor </a>
                                    <a href='/patient/register'
                                       className={styleSign.mybutton}> Register As Patient </a>
                                </span>
                                </div>
                                {error ? <div className="text-danger">{error}</div> : null}
                            </Form>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    );
}

export default SignIn;