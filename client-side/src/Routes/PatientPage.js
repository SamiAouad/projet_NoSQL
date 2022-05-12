import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import style from "../css/Register.module.css";

function PatientPage(props) {
    const [error, setError] = useState('')
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const patientId = params.id
    const [treatment, setTreatment] = useState()
    const api = axios.create({
        baseURL: 'https://applicationgestionmedicale.herokuapp.com/'
    })
    const [file, setFile] = useState()

    const addPrescription = async () => {
        const item = new URLSearchParams();
        item.append("photo", file)
        item.append("treatmentId", treatment[0]._id)
        try {
            await api.post('/api/treatment/add/prescription', item)
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
                const result = await api.get(`/api/treatment/${params.id}`)
                if (result.status === 200) {
                    setLoading(false)
                    console.log(result.data)
                    setTreatment(result.data)
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
    return (
        <div>
            <div className={style.submitbtn}>
                <label>Photo : </label>
                <form onClick={addPrescription}>
                    <input type='file' id='photo' accept="image/png" onChange={e => {
                        setFile(e.target.files[0]);
                    }}/>
                    <button type={"submit"}>Upload</button>
                </form>

            </div>
        </div>
    );
}

export default PatientPage;