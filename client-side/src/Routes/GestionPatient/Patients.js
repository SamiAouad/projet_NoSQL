import style from  '../../asset/css/style.module.css'
import image from '../../asset/images/Agnaou.png'

const Patients = () => {
    return ( 
        <div>
                <section className={`${style.course} ${style.pagebg}` } id={style.course}>
                <p className={style.sectionsubtitle}>Mes Patients</p>
                <div className='row'>
                <div className='col-10'>
                <h2 className={style.sectiontitle}>Voici La Liste de Vos Patients </h2>
                </div>
                <div className='col-2'> 
                <button type="submit" className="btn-text" id="mybtn"> Nouveau Patient </button>
                </div>
                </div>
               
                
          <div className={style.coursegrid}>
            
            <div className='row'>
              <div className='col'>
              <div className={style.coursecard}>
              <div className={style.coursebanner}>
                <img src={image} alt="course banner" />
                <div className={style.coursetagbox}>
                  <a href="#" className={`${style.badgetag} ${style.orange} ${style.textdecorationnone}`}> + Detail</a>
                </div>
              </div>
              <div className={style.coursecontent}>
                <h3 className={style.cardtitle}>
                  <p>N° Dossier : .....</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                   
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>Agnaou Mohamed</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Suivie </p>
                    <p className={style.authorname}>Traitement </p>
                    <p className={style.authorname}>Amélioration </p>
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
                <div className={style.coursetagbox}>
                  <a href="#" className={`${style.badgetag} ${style.orange} ${style.textdecorationnone}`}> + Detail</a>
                </div>
              </div>
              <div className={style.coursecontent}>
                <h3 className={style.cardtitle}>
                  <p>N° Dossier : .....</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                    
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>Agnaou Mohamed</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Suivie </p>
                    <p className={style.authorname}>Traitement </p>
                    <p className={style.authorname}>Amélioration </p>
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
                <div className={style.coursetagbox}>
                  <a href="#" className={`${style.badgetag} ${style.orange} ${style.textdecorationnone}`}> + Detail</a>
                </div>
              </div>
              <div className={style.coursecontent}>
                <h3 className={style.cardtitle}>
                  <p>N° Dossier : .....</p>
                </h3>
                <div className={`${style.wrapper} ${style.borderbottom}`}>
                  <div className={style.author}>
                   
                    <a href="#" className={`${style.authorname} ${style.textdecorationnone}`}>Agnaou Mohamed</a>
                  </div>
                </div>
                <div className={style.wrapper}>
                  <div className={style.courseprice}>
                    <p className={style.authorname}>Suivie </p>
                    <p className={style.authorname}>Traitement </p>
                    <p className={style.authorname}>Amélioration </p>
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
        </div>
     );
}
 
export default Patients;