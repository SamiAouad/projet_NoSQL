import style from  '../src/asset/css/style.module.css'
import image from '../src/asset/images/Agnaou.png'
import image1 from '../src/asset/images/PatientPatient.png'

const AcceptPatient = () => {
    return ( 
        <div>
          <section className={`${style.course} ${style.pagebg}` } id={style.course}>
                <p className={style.sectionsubtitle}>Liste des Demandes</p> 
          <div className={style.coursegrid}>
            
            <div className='row'>
              <div className='col'>
              <div className={style.coursecard}>
              <div className={style.coursebanner}>
                <img src={image} alt="course banner" />
                <button type='submit' className='btn-bg-danger mt-2' > Accepter</button>
                <button type='submit' className='btn-bg-danger m-lg-2' > Decliner</button>
               
              </div>
             
              <div className={style.coursecontent}>
             
                <h3 className={style.cardtitle}>
                   <p> Agnaou mohamed</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                   
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>informations</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Mes symptoms </p>
                    <p className={style.authorname}>mes Douleurs</p>
                    <p className={style.authorname}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie </p>
                  </div>
                  <div>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
              <div className='col'>
              <div className={style.coursecard}>
              <div className={style.coursebanner}>
                <img src={image} alt="course banner" />
                <button type='submit' className='btn-bg-danger mt-2' > Accepter</button>
                <button type='submit' className='btn-bg-danger m-lg-2' > Decliner</button>
               
              </div>
             
              <div className={style.coursecontent}>
             
                <h3 className={style.cardtitle}>
                   <p> Agnaou mohamed</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                   
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>informations</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Mes symptoms </p>
                    <p className={style.authorname}>mes Douleurs</p>
                    <p className={style.authorname}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie </p>
                  </div>
                  <div>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
              <div className='col'>
              <div className={style.coursecard}>
              <div className={style.coursebanner}>
                <img src={image} alt="course banner" />
                <button type='submit' className='btn-bg-danger mt-2' > Accepter</button>
                <button type='submit' className='btn-bg-danger m-lg-2' > Decliner</button>
               
              </div>
             
              <div className={style.coursecontent}>
             
                <h3 className={style.cardtitle}>
                   <p> Agnaou mohamed</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                   
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>informations</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Mes symptoms </p>
                    <p className={style.authorname}>mes Douleurs</p>
                    <p className={style.authorname}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie </p>
                  </div>
                  <div>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
          
        </section>
        <section className={style.features}>
        <div className={style.featuresleft}>
          
          <h2 className={style.sectiontitle}>Création Dossier Médicale </h2>
          <div className='row'>
              <div className='col-3'>
                    <img className={style.myimg} src={image1}/>
              </div>
              <div className='col-5'>
              <div className={style.container} id={style.mycontainer}>
                          <form>
                            <div className="row">
                            
                                <label className={style.dmtxt}> Patient :  </label> {/* Liste des Noms des patients */}
                                <select className={style.myselect}>
                                <option className={style.myoption} value="Option 1">Agnaou</option>
                                <option  className={style.myoption} value="Option 2">Aouad</option>
                                <option  className={style.myoption} value="Option 3">Sami </option>
                                <option className={style.myoption} value="Option 4">Mohamed</option>
                                <option  className={style.myoption} value="Option 5">Option 5</option>
                                </select>
                              </div>

                              <div className="row" >
                                <label className={style.dmtxt}>Traitement : </label>
                                <textarea className={style.mytextarea} id="exampleFormControlTextarea1" defaultValue={""} /> {/* ajout du traitement ou bien modification */}
                              </div>
                         
                              <div className="row" >
                                <label className={style.dmtxt}>Medicaments : </label>
                                <textarea className={style.mytextarea} id="exampleFormControlTextarea1" defaultValue={""} /> {/* ajout des medocs ou bien modification */}
                              </div>
                               
                              <div className="row" >
                              <div className="input-group">
        
                             <div className="custom-file">
                                 
                                  <label className={style.dmtxt} htmlFor="inputGroupFile01">Ordonnance : </label>
                                  <input type="file" className="custom-file-input m-lg-2" id="mybtn"  />
                                   </div>
                                   </div> 
                              </div>
                            <div className="col-4 mt-4">
                              <button type="submit" className="btn-text" id="mybtn"> Enregistrer </button>
                            </div>
                          </form>
                        </div>
                    
            </div>
            <div className='col-4'>
                    <img className={style.myimg} src={image1}/>
              </div>
          </div>
          </div>
      </section>
        </div>
     );
}
 
export default AcceptPatient;