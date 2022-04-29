import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router";

function PatientHomePage() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)
    const [doctors, setDoctors]= useState([])
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })
    useEffect(() => {
        console.log(user)
        const getAllDoctors = async () => {
            const result = await api.get("doctor/all");
            setDoctors(result.data);
            setLoading(false);
        };
        getAllDoctors();
    }, []);

    const createRdv = (doctor) => {
        localStorage.setItem('doctor', JSON.stringify(doctor))
        navigate('/rdv')
    }

    if (loading){
        return (
            <div>Loading</div>
        )
    }

    return (
        <div>
            {
                doctors.map((doctor, key) => {
                    return (
                        <div key={key}>
                            <div>{doctor.email}</div>
                            {/*<img alt={'image'} src={`data:image/jpeg;base64,${doctor.photo}`}/>*/}
                            <button onClick={() => createRdv(doctor)}>Prendre rdv</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PatientHomePage;