import style from  '../../asset/css/style.module.css'
import image from '../../asset/images/Doctor.jpg'
const CreateAppoinement = () => {
    return ( 
        <div>
          <section className={style.event}>
          <div className={style.eventleft}>
            <div className='row'>
            <div className='col-7'>
               <div className={style.eventright}>
            <p className={style.sectionsubtitle}>Nouveaux Rendez Vous </p>
            <div className={style.eventcardgroup}>
              <div className={`${style.eventcard} ${style.bg}` }>
                <div>
                  <div className={style.center}>
                    <div className="row">
                      <div className="col">
                        <div className={style.container} id={style.mycontainer}>
                          <form>
                            <div className="row">
                              <div className="col">
                                <label> Pour Quand le Rendez-Vous ?</label>
                                <input type="date" className="form-control" placeholder="Quand  ?" />
                              </div>
                              <div className="col">
                                <label>Motifs</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={""} />
                              </div>
                            </div>
                            <fieldset className="form-group">
                              <div className="row">
                                <div className="col">
                                  <label>Choisissez la Période </label>
                                  <select className="form-select" aria-label="Default select example">
                                    <option selected>Matinée</option>
                                    <option value={1}>Aprés-Midi</option>
                                  </select>
                                </div>
                                <div className="col">
                                  <legend className="col-form-label " id="myradio">Urgence</legend>
                                  <div className="col-sm-10">
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                      <label className="form-check-label" htmlFor="gridRadios1">
                                        Urgence sans risque
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                      <label className="form-check-label" htmlFor="gridRadios2">
                                        Ugrence Vitale
                                      </label>
                                    </div>
                                    <div className="form-check ">
                                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" />
                                      <label className="form-check-label" htmlFor="gridRadios3">
                                        Simple Consultation
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div className="col">
                              <button type="submit" className="btn-text" id="mybtn"> Enregistrer </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
               </div>
               <div className='col-5'>
                       <div className={style.eventbanner}>
                        <img src={image} alt="event banner" className={style.bannerimg} />
                        </div>
               </div>
            
            </div>
            
          </div>
       
        </section>
        </div>
     );
}
 
export default CreateAppoinement;