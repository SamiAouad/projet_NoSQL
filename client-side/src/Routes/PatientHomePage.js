import React, {useEffect, useState} from 'react';
import axios from "axios";

function PatientHomePage() {
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)
    const [doctors, setDoctors]= useState([])
    const [images, setImages] = useState([])
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

    if (loading){
        return (
            <div>Loading</div>
        )
    }


    return (
        <div>
            {
                doctors.map((doctor, key) => {
                    console.log(images[0])
                    return (
                        <div key={key}>
                            <div>{doctor.email}</div>
                            <img alt={'image'} src={`data:image/jpeg;base64,${doctor.photo}`}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PatientHomePage;