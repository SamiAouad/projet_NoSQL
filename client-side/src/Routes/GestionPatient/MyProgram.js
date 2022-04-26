import style from  '../../asset/css/style.module.css'
import image from '../../asset/images/Background.jpg'
const Program = () => {
    return ( 
        <div>
             <section className={style.event}>
               <div className='row'>
                 <div className='col-4'>
                 <div className={style.eventleft}>
            <div className={style.eventbanner}>
              <img src={image}  className={style.bannerimg} />
            </div>
                 </div>
               
          </div>
          <div className="col-8 field">
           
            <p className={style.sectionsubtitle}>Mes Consultations</p>
            <div className={style.eventcardgroup}>
              <div className={style.eventcard}>
              <div className='row'>
              <div className='col-4'>
              <div className={style.contentleft}>
                  <p className={style.day}>28</p>
                  <p className={style.month}>Feb, 2022</p>
                </div>
               
              </div>
              <div className='col-8'>
                <div className={style.contentright}>
                  <div className={style.schedule}>
                    <p className={style.time}>10:30am To 2:30pm</p>
                  </div>
                  <p className={style.eventname}>Agnaou </p>
                  <p className={style.eventname}> Motife </p>
                  <div >
                    <button className=" btn-text " > Annuler ? </button>
                  </div>
                </div>
                </div>
            </div>
               
                
              </div>
              <div className={style.eventcard}>
              <div className='row'>
              <div className='col-4'>
              <div className={style.contentleft}>
                  <p className={style.day}>28</p>
                  <p className={style.month}>Feb, 2022</p>
                </div>
               
              </div>
              <div className='col-8'>
                <div className={style.contentright}>
                  <div className={style.schedule}>
                    <p className={style.time}>10:30am To 2:30pm</p>
                  </div>
                  <p className={style.eventname}>Agnaou </p>
                  <p className={style.eventname}> Motife </p>
                  <div >
                    <button className=" btn-text " > Annuler ? </button>
                  </div>
                </div>
                </div>
            </div>
               
                
              </div>
              
              
            </div>
            
          </div>
               </div>
        
        </section>
        </div>
     );
}
 
export default Program;