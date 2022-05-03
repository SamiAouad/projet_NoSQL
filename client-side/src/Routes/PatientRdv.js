import style from '../css/Patientrdvs.module.css'
import { Table } from 'react-bootstrap';
import image from '../images/patientrdv/Clock.png'
const PatientRdv = () => {
    const PatientData = [
        { id  :"1" , NumPatient : "P1110" , Doctor : "AHMAD TAZI" ,  Date  : "12/09/2021" , Horaire : "08:00" , Statut : "Accepté" } , 
        { id  :"2" , NumPatient : "P1110" , Doctor : " BENANI SMIRES" ,   Date : "12/09/2021" , Horaire : "08:00" , Statut : "Accepté" } ,
        { id  :"3" , NumPatient : "P1110" , Doctor : " LGEZAR" , Date : "12/09/2021" , Horaire : "08:00" ,Statut : "Accepté" } ,
        { id  :"4" , NumPatient : "P1110" , Doctor : " LBENJ"  , Date : "12/09/2021" , Horaire : "08:00" , Statut : "en attente" } ,
    ]
    return ( 
        <div>
             <section className={style.myfirstsection}>
                 <div className='row'> 
                     <div className='col-8'>
                     <h5 className={style.mytitle}>
                    Etat d'avancement de vos Futures Consultations : 
                 </h5>
                
                 <Table  id={style.mytable} responsive="md">
                        <thead className={style.thead}>
                                        <tr>
                                        <th>#</th>
                                        <th>Num Patient</th>
                                        <th>Nom Doctor</th>
                                        <th>Statut  </th>
                                        <th>Date</th>
                                        <th>horaire</th>
                                        
                                        </tr>
                        </thead>
                        <tbody className={style.tbody}>
                            {
                                PatientData.map((data) => {
                                    return( 
                                        <tr>
                                        <td>{data.id}</td>
                                        <td>{data.NumPatient}</td>
                                        <td>{data.Doctor}</td>
                                        <td>{data.Statut}</td>
                                        <td>{data.Date}  </td>
                                        <td>{data.Horaire}</td>
                                       
                                        </tr>  
                                    )
                                })
                            }
                        </tbody>
                </Table>
                     </div>
                     <div className='col-4'>
                     <img src={image} id={style.myimg}></img>
                     </div>
                 </div>
               
            </section>
            <section className={style.mysecsection}>
                <div className='row'>
                                <div className='col-6'>
                                <h4 className={style.mysectitle}>Si vous vous êtes accepté veuillez remplir <br/> la fiche d'information pour votre medecin</h4>
                                <p className={style.myfourthtitle}>Date de votre Rendez-Vous : </p> {/* la liste des rendez vous accepté */} 
                                    <select class="custom-select" id={style.myinputSelect}>
                                                <option selected>Du 03/05/2022</option>
                                                <option value="1">Du 03/05/2022</option>
                                                <option value="2">Du 04/05/2022</option>
                                                <option value="3">Du 05/05/2022</option>
                                            </select>
                                            <div className='row'>
                                            <div className='col-6' >
                                    <p className={style.mysectext}>Comment est votre état de santé général ?</p>
                                    <select class="custom-select" id={style.mysecinputSelect}>
                                                <option selected>Trés bon</option>
                                                <option value="1">Bon</option>
                                                <option value="2">Mauvais</option>
                                                <option value="3">Trés mauvais</option>
                                            </select>
                                    </div>
                                    <div className='col-6' >
                                    <p className={style.mysectext}>Souffrez-vous d’une maladie ou d’un problème de santé chronique ?</p>
                                    <select class="custom-select" id={style.mysecinputSelect}>
                                                <option selected>oui</option>
                                                <option value="1">non</option>
                                                <option value="2">Aucune idée</option>
                                                
                                            </select>
                                    </div>
                                  
                                            </div>
                                
                                    <div className='col-6' >
                                    <p className={style.mysectext}>Au cours des dernières 24 heures,  avez-vous consommé des médicaments ? (si oui veuillez designer leurs Noms )</p>
                                    <textarea class={style.mytextarea} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button className={style.mybutton} role="button">Enregistrer</button>
                                  
                                </div>
                               
                                <div className='col-6' id={style.myfield}>
                                    <h2 className={style.mythirdtitle}>Le malade prend l'avis du médecin <br/> Le médecin prend la vie du malade...</h2>
                                </div>
                                
                                
                </div>
                                
            </section>
        </div>
     );
}
 
export default PatientRdv;