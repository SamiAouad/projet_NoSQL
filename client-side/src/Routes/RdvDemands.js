import React from 'react';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

function RdvDemands() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([])
    const api = axios.create({
        baseURL: 'https://app-gestion-medicale.herokuapp.com/'
    })

    useEffect(() => {
        console.log(user)
        const getAllAppointments = async () => {
            const result = await api.post("/api/doctor/rdv", user._id)
            setAppointments(result.data);
            setLoading(false);
        };
        getAllAppointments();
    }, []);

    const acceptRdv = async (appointment) => {
        const treatment = {
            patientId: appointment.patientId,
            doctorId: appointment.doctorId
        }
        try {
            const result = await api.post("/api/treatment/create", treatment)
            if (result.status === 500)
                navigate('/error/500')
            else {
                console.log("well done")
            }
        } catch (ex) {
            console.log(ex)
            navigate('/error/500')
        }

    }

    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <div>
            {
                appointments.map((appointment, key) => {
                    return (
                        <div key={key}>
                            {appointment._id}
                            <button onClick={(appointment) => acceptRdv(appointment)}>Accept</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RdvDemands;