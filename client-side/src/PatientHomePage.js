import style from './css/PatientHomePage.module.css'
import image from './images/PatientHomePage/BackgroundPatient.jpg'
import firsticon from './images/PatientHomePage/icon.png'
import secondicon from './images/PatientHomePage/secondicon.png'
import thirsticon from './images/PatientHomePage/third.png'
import Information from './images/PatientHomePage/IconInformation.png'
import Traitement from './images/PatientHomePage/Icontraitement.png'
import Symptomes from './images/PatientHomePage/IconSymptomes.png'
const PatientHomePage = () => {
    return ( 
        <div>
            <section className={style.mysection}>
                        <div className='row'>
                            <div className='col-4'>
                                  <img id={style.myimg} src={image}></img>
                            </div>
                            <div className='col-8'>
                               <div className='row'>
                                            <h1 className={style.title}> Bienvenue à votre plateforme Médicale </h1>
                                            <div className={style.mycontainer}>
                                                <div className='row'>
                                                        <div className='col-8'>
                                                        <form className={style.myform}>
                                           <div className='row'>

                                           <div className='col-4'>
                                               
                                               <label className={style.subtitle} >Des Symptomes ? </label>
                                               </div>
                                            <div className='col-6'>
                                            <select class="custom-select" id={style.inputGroupSelect01}>
                                                <option selected>courbatures</option>
                                                <option value="1">Akinésie</option>
                                                <option value="2">Blocage du genou</option>
                                                <option value="3">Aniscorie</option>
                                                <option value="4">Croûtes dans le nez</option>
                                                <option value="5">Le saignement du nez</option>
                                                <option value="6">Grincement des dents</option>
                                                <option value="7">La déformation des doigts</option>
                                                <option value="8">La difficulté à avaler</option>
                                            </select>
                                          </div>
                                          </div>
                                          <div className='row'>
                                            <div className='col-4'>
                                          
                                               <label className={style.subtitle} >Quel  Specialiste ? </label>
                                               </div>
                                            <div className='col-6'>
                                            <select class="custom-select" id={style.inputGroupSelect01}>
                                            <option value="L’anesthésiologie">L’anesthésiologie</option>
                                        <option value="L’andrologie">L’andrologie</option>
                                        <option value="cardiologie">cardiologie</option>
                                        <option value="chirurgie cardiaque">chirurgie cardiaque</option>
                                        <option value="chirurgie générale"> chirurgie générale</option>
                                        <option value="chirurgie pédiatrique">chirurgie pédiatrique</option>
                                        <option value="neurochirurgie">neurochirurgie</option>
                                        <option value="dermatologie">dermatologie</option>
                                        <option value="L’endocrinologie">L’endocrinologie</option>
                                        <option value="neurologie">neurologie</option>
                                            </select>
                                            </div>
                                            

                                            </div>
                                           
                                            <div className='row'>
                                           <div className='col-4'>
                                               
                                               <label className={style.subtitle} >Dans Quelle Ville  ? </label>
                                               </div>
                                            <div className='col-6'>
                                            <select class="custom-select" id={style.inputGroupSelect01}>
                                                <option selected>Rabat</option>
                                                <option value="1">Fes</option>
                                                <option value="2">Marrakech</option>
                                                <option value="3">Tanger</option>
                                                <option value="4">Agadir</option>
                                                <option value="5">Meknes</option>
                                                <option value="6">Dakhla</option>
                                                <option value="7">Nador</option>
                                                <option value="8">Tetouan</option>
                                            </select>
                                          </div>
                                          </div>
                                           </form>
                                                        </div>
                                                        <div className='col-4'>
                                                        <button class={style.mybutton} role="button">Faite votre Recherche</button>
                                                        </div>
                                                       
                                                </div>
                                                
                                            </div>
                                           
                                          
                               </div>
                            </div>
                           
                        </div>
                       
            </section>
            <section className={style.mysecondsection}>
                <div className='row'>
                  <h3 className={style.secondsubtitle}>Pourquoi devriez-vous consulter votre médecin régulièrement?</h3>
                </div>
               <div className={style.mythirdcontainer}>
               <div className='row'>
                        <div className='col-2'>
                            <img src={firsticon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle} >Une visite régulière chez votre médecin permet à ce dernier ainsi qu’à vous-même de discuter et de vérifier vos antécédents médicaux afin d’identifier certaines anomalies ou préoccupations. </h5>
                        </div>
                </div>
                <div className='row'>
                        <div className='col-2'>
                            <img src={thirsticon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle} >Visiter votre médecin alors que vous êtes en bonne santé fait partie d’une approche proactive pour votre santé. </h5>
                        </div>
                </div>
                <div className='row'>
                        <div className='col-2'>
                            <img src={secondicon} className={style.mysecondimg}/>
                        </div>

                        <div className='col-3'>
                            <h5 className={style.thirdsubtitle} >Vous pourriez, à tout moment, ressentir certains maux ou douleurs qui soulèveront des questions au sujet de votre état de santé. </h5>
                        </div>
                </div>
               </div>
            </section>
            <section className={style.mythirdsection}>
                <div className='row'>
                  <h1 className={style.thirdstitle}>Faites Le Suivie de Votre Traitement</h1>
                  <div className='col'>
                        <img src={Traitement} className={style.mythirdIcon}/>
                        <a  href='#' className={style.fourthtitle}> Mon Traitement </a>
                  </div>
                  <div className='col'>
                        <img src={Information} className={style.mythirdIcon}/>
                        <a  href='#' className={style.fourthtitle}> Mes Rendez-Vous </a>
                  </div>
                  <div className='col'>
                        <img src={Symptomes} className={style.mythirdIcon}/>
                        <a  href='#' className={style.fourthtitle}> Des Ameliorations </a>
                  </div>
                </div>
               
            </section>
        </div>
     );
}
 
export default PatientHomePage;