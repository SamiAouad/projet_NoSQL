import style from './css/DetailPatients.module.css'
import image from '../src/images/detailspatient/Agnaou.png'
import {Form, ProgressBar,Table} from 'react-bootstrap'

const DetailPatient = () => {
    const PatientData = [
        { id  :"1" , NumPatient : "P1110" , NumDossier : " D1110" , Traitement : "Preventif" , Date : "12/09/2021" , Horaire : "08:00" , Situation :"Urgence sans risque" } , 
        { id  :"1" , NumPatient : "P1110" , NumDossier : " D1110" , Traitement : "Curatif" , Date : "12/09/2021" , Horaire : "08:00" , Situation :"Urgence sans risque" } ,
        { id  :"1" , NumPatient : "P1110" , NumDossier : " D1110" , Traitement : "Diagnostique" , Date : "12/09/2021" , Horaire : "08:00" , Situation :"Urgence sans risque" } ,
        { id  :"1" , NumPatient : "P1110" , NumDossier : " D1110" , Traitement : "Curatif" , Date : "12/09/2021" , Horaire : "08:00" , Situation :"Urgence sans risque" } ,
    ]
    return ( 
        <div>
           <section className={style.mysection}>
               <h3 className={style.title}> Detail Patient  </h3>
               <div className='row' id={style.myrow}>
                        <div className='col-4'> 
                        <div>
                        <img  className={style.myimage } src={image}></img>
                        </div>  
                        <div>
                       <h3 className={style.subtitle}> AGNAOU MOHAMED
                           </h3>
                        </div>
                        </div>
                        <div className='col-6'> 
                        <div className={style.mycontainer}>
                       <div className='row'>
                            <div className='col'>
                            <Form.Group className="mb-3">
                        <Form.Label>N° Patient</Form.Label>
                        <Form.Control  classNAme='myfield' placeholder="Disabled input" disabled />
                        </Form.Group>
                            </div>
                            <div className='col'>
                            <Form.Group className="mb-3">
                        <Form.Label>N° Dossier</Form.Label>
                        <Form.Control placeholder="Disabled input" disabled />
                        </Form.Group>
                            </div>
                       </div>
                       <div className='row'>
                            <div className='col'>
                            <Form.Group className="mb-3">
                        <Form.Label>Created At : </Form.Label>
                        <Form.Control  classNAme='myfield' placeholder="Disabled input" disabled />
                        </Form.Group>
                            </div>
                            <div className='col'>
                            <Form.Group className="mb-3">
                        <Form.Label>Updated At </Form.Label>
                        <Form.Control placeholder="Disabled input" disabled />
                        </Form.Group>
                            </div>
                       </div>
                       <div className='row'>
                       <div className={style.myprogress}>
                           <label> Retablissement : </label>
                        <ProgressBar variant="success" now={70} />
                        <label> Traitement : </label>
                        <ProgressBar variant="info" now={30} />
                        <label> Symptomes : </label>
                        <ProgressBar variant="warning" now={40} />
                        <label> Signes Critiques : </label>
                        <ProgressBar variant="danger" now={10} />
                        </div>
                       </div>
                        </div>  
                        </div>
               </div>
           </section>
           <section className={style.mysecondsection}>
               <div className='row'>
                   <div className='col-4'>
                   <h3 className={style.title} id={style.mytxtHI}> Historique des Consultaions  </h3>
                   </div>
                   <div className='col-7'>
                   <Table  id={style.mytable} responsive="md">
                        <thead className={style.thead}>
                                        <tr>
                                        <th>#</th>
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
             
           </section>
           </div>
     
     );
}
 
export default DetailPatient;