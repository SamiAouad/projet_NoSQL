import { Row, Table} from "react-bootstrap";
import NavbarDoctor from "./NavbarDoctor";
import image from '../images/signIn/PatientPatient.png'
import style from '../css/RDV.module.css'
import {useNavigate} from "react-router";
import {useEffect} from "react";
import axios from "axios";

const RDV = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        if (!user)
            navigate('/SignIn')
        else
        if (user.cni)
            navigate('/doctor/register')
    }, [])



const PatientData = [
    { id  :"1" , picture : "image" , NumPatient : "P1110" , NumDossier : " D1110" , Traitement : "Curatif" , Date : "12/09/2021" , Horaire : "08:00" , Situation :"Urgence sans risque" } , 
    { id  :"2" , picture : "image" , NumPatient : "P1111" , NumDossier : " D1111" , Traitement : "Palliatif" , Date : "15/09/2021" , Horaire : "08:30" ,Situation : "Ugrence Vitale" } ,
    { id  :"3" , picture : "image" , NumPatient : "P1112" , NumDossier : " D1112" , Traitement : "Préventif" , Date : "24/09/2021" , Horaire : "09:00" , Situation : " Urgence Vitale " } , 
    { id  :"4" , picture : "image" , NumPatient : "P1113" , NumDossier : " D1113" , Traitement : "Curatif" , Date : "05/09/2021" , Horaire : "10:00"  , Situation : " Urgence Non Vitale"} , 
 
]

    return (
        <div>
            <NavbarDoctor/>
            <div className="container">
            <div className="row ">
            <div className="col bg m-l-0">

            </div>
    <div className="col">
    <div className="center ">
<h3> Ma Journée </h3>
<Table responsive="md">
  <thead className={style.thead}>
    <tr>
      <th>#</th>
      <th>Patient</th>
      <th>Numero Patient</th>
      <th>Numero Dossier</th>
      <th>Traitement</th>
      <th>Date  </th>
      <th>horaire</th>
      <th>situation </th>
    </tr>
  </thead>
  <tbody className={style.tbody}>
   {
       PatientData.map((data) => {
           return( 
              <tr>
              <td>{data.id}</td>
              <td>{data.picture}</td>
              <td>{data.NumPatient}</td>
              <td>{data.NumPatient}</td>
              <td>{data.Traitement}</td>
              <td>{data.Date}  </td>
              <td>{data.Horaire}</td>
              <td>{data.Situation} </td>
            </tr>  
           )
       })
   }
  </tbody>
</Table>
<h3>Mes Dernieres Consultations</h3>
<Table responsive="md">
  <thead className={style.thead}>
    <tr>
      <th>#</th>
      <th>Patient</th>
      <th>Numero Patient</th>
      <th>Numero Dossier</th>
      <th>Traitement</th>
      <th>Date  </th>
      <th>horaire</th>
      <th>situation </th>
    </tr>
  </thead>
  <tbody className={style.tbody}>
   {
       PatientData.map((data) => {
           return( 
              <tr>
              <td>{data.id}</td>
              <td>{data.picture}</td>
              <td>{data.NumPatient}</td>
              <td>{data.NumPatient}</td>
              <td>{data.Traitement}</td>
              <td>{data.Date}  </td>
              <td>{data.Horaire}</td>
              <td>{data.Situation} </td>
            </tr>  
           )
       })
   }
  </tbody>
</Table>

</div>
    </div>
    
  </div>
</div>

        </div>
        
     );
}
 
export default RDV;