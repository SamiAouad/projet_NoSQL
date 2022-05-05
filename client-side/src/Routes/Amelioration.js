import style from '../css/Amelioration.module.css'
import { Table } from 'react-bootstrap';
import file from '../Prescription/TestOrdonnance.pdf'
import logo from '../images/amelioration/Image.png'
const Amelioration = () => {
    const PatientData = [
        { id  :"1" , NumDossier : "P1110" , Doctor : "AHMAD TAZI" ,  Date  : "12/09/2021" , Medicament : "Doliprane-Rhumix" , Duree : "1 mois" ,  } , 
        { id  :"2" , NumDossier : "P1110" , Doctor : " BENANI SMIRES" ,   Date : "12/09/2021" , Medicament : "Astrazeneka-Ansuline" , Duree : "2 semaine" } ,
        { id  :"3" , NumDossier : "P1110" , Doctor : " LGEZAR" , Date : "12/09/2021" , Medicament : "VitamineC-VitamineD" ,Duree : "3 semaine" } ,
        { id  :"4" , NumDossier : "P1110" , Doctor : " LBENJ"  , Date : "12/09/2021" , Medicament : "EAU " , Duree : "5 mois" } ,
    ]
    return ( 
    <div>
            <section className={style.mysection}>
               <div className='row'>
                        <div className='col' id={style.myfield}>
                                <h2 className={style.mytitle}> Chez HEALTHO </h2>
                                <p className={style.mytext}>il est aujourd’hui beaucoup plus facile d’obtenir une ordonnance auprès d’un médecin sans se déplacer. </p>
                        </div>
                        <div className='col-7' >
                            <img src={logo} id={style.myimg}/>
                                <h3 className={style.mysectitle}>Votre Traitement </h3>
                                <Table  id={style.mytable} responsive="md">
                                <thead className={style.thead}>
                                        <tr>
                                        <th>#</th>
                                        <th>Num Patient</th>
                                        <th>Nom Doctor</th>
                                        <th>Statut  </th>
                                        <th>Date</th>
                                        <th>horaire</th>
                                        <th>Ordonnances</th>
                                        
                                        </tr>
                        </thead>
                        <tbody className={style.tbody}>
                            {
                                PatientData.map((data) => {
                                    return( 
                                        <tr>
                                        <td>{data.id}</td>
                                        <td>{data.NumDossier}</td>
                                        <td>{data.Doctor}</td>
                                        <td>{data.Date}</td>
                                        <td>{data.Medicament}  </td>
                                        <td>{data.Duree}</td>
                                        <td>
                                        <a href={file} download="VotreOrdonnance">
                                        <button type="button" className={style.mybutton}>Ordonnance</button>
                                        </a>
                                        </td>
                                       
                                        </tr>  
                                    )
                                })
                            }
                        </tbody>
                </Table>
                </div>
               </div>
            </section>
            <section className={style.mysecsection}>
               <div className='row'>
               <div className='col-6'>
                                <h4 className={style.mysectitle}>Veuillez Sairee vos Symptomes aupres de votre specialiste  <br/> Afin qu'il puisse suivre vos ameliorations </h4>
                                <p className={style.myfourthtitle}>Nom de Votre Medecin : </p> {/* la liste des Medecins dialo */} 
                                    <select class="custom-select" id={style.myinputSelect}>
                                                <option selected>AHMAD TAZI</option>
                                                <option value="1">BENANI SMIRES</option>
                                                <option value="2">LGEZAR</option>
                                                <option value="3">LBENJ</option>
                                            </select>
                                            <div className='row'>
                                            <div className='col-6' >
                                    <p className={style.mysectext}>Etat de votre Traitement  , y-a-t-il des Symptomes Secondaire ?</p>
                                    <select class="custom-select" id={style.mysecinputSelect}>
                                                <option selected>oui</option>
                                                <option value="1">non</option>
                                                <option value="2">je me sens pas bien</option>
                                                <option value="3">Aucune idee</option>
                                            </select>
                                    </div>
                                    <div className='col-6' >
                                    <p className={style.mysectext}>A l'echelle de (1-10) comment jugez-vous votre état </p>
                                    <select class="custom-select" id={style.mysecinputSelect}>
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="2">4</option>
                                                <option value="2">5</option>
                                                <option value="2">6</option>
                                                <option value="2">7</option>
                                                <option value="2">8</option>
                                                <option value="2">9</option>
                                                <option value="2">10</option>
                                            </select>
                                    </div>
                                  
                                            </div>
                                
                                    <div className='col-6' >
                                    <p className={style.mysectext}>Au cours des dernières 24 heures, avez-vous ressenti un Rétablissement ? a l'echelle de 1 a 10 </p>
                                    <select class="custom-select" id={style.mysecinputSelect}>
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="2">4</option>
                                                <option value="2">5</option>
                                                <option value="2">6</option>
                                                <option value="2">7</option>
                                                <option value="2">8</option>
                                                <option value="2">9</option>
                                                <option value="2">10</option>
                                            </select>
                                    </div>
                                    <button className={style.mybutton} role="button">Enregistrer</button>
                                  
                                </div>
                                <div className='col-6'>
                                <img src={logo} id={style.mysecimg}/>
                                </div>
               </div>
            </section>
    </div> );
}
 
export default Amelioration;