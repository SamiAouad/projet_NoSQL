import style from '../asset/css/style.module.css'
import stylesec from '../css/SearchingDoctor.module.css'
import image from '../images/Searchingdoctor/doc1.jpg'
const SearchingDoctor = () => {
    return ( 
        <div>
                     <section className={stylesec.mysection}>
                        <div className='row' id={stylesec.myrow}>
                            <h1 className={stylesec.mytext}>
                                    Préparer sa consultation 
                            </h1>
                            <div className='col-5' >
                                    <p id={stylesec.mysectext}>Pourquoi voulez-vous consulter ?</p>
                                    <textarea class={stylesec.mytextarea} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className='row'>
                            <div className='col-5' >
                                    <p id={stylesec.mysectext}>Urgence de votre Rendez-vous : </p>
                                    <select class="custom-select" id={stylesec.myinputSelect}>
                                                <option selected>Simple Consultation</option>
                                                <option value="1">Urgence Cardiaque</option>
                                                <option value="2">Urgences respiratoires</option>
                                                <option value="3">Pertes de connaissance</option>
                                                <option value="4">Saignements et hémorragie</option>
                                                <option value="5">Intoxications</option>
                                                <option value="6">Empoisonnement</option>
                                                <option value="7">Accidents graves</option>
                                            </select>
                            </div>
                            </div>
                            <button className={stylesec.mybutton} role="button">Aller choisir votre Spécialiste</button>
                            
                        </div>
                    </section>
                    <section className= {style.mysection}>
                        <div className='row' id={style.myid}>
                        <div className='col-4'>
                                                    <div className={style.coursecard}>
                                                        <div className={style.coursebanner}>
                                                            <img
                                                                src={image}
                                                                alt="course banner"/>
                                                            <button type='submit'
                                                                    className='btn-bg-danger mt-3 '> Demander Un Rendez-Vous 
                                                            </button>
                                                            

                                                        </div>

                                                        <div className={style.coursecontent}>

                                                            <h3 className={style.cardtitle}>
                                                                <p>Sami AOUAD</p>
                                                            </h3>
                                                            <div className={`${style.wrapper} ${style.borderbottom}`}>
                                                                <div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-8"}>Date de Naissance</div>
                                                                       
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-3"}>Sexe:</div>
                                                                        <div
                                                                            className={"col-4"}>specialite
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Email:</div>
                                                                        <div
                                                                            className={"col-6"}>sami.aouad@gmail.com
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Telephone Cabinet :</div>
                                                                        <div
                                                                            className={"col-6"}>0537598755
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={style.wrapper}>
                                                                <div className={style.courseprice}>
                                                                    <p className={style.authorname}>Mon Experience </p>
                                                                    <p className={style.authorname}>
                                                                    Ce praticien applique des tarifs fixés par l'assurance maladie, sans dépassement d'honoraires
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                        </div>
                        <div className='col-4'>
                                                    <div className={style.coursecard}>
                                                        <div className={style.coursebanner}>
                                                            <img
                                                                src={image}
                                                                alt="course banner"/>
                                                            <button type='submit'
                                                                    className='btn-bg-danger mt-3 '> Demander Un Rendez-Vous 
                                                            </button>
                                                            

                                                        </div>

                                                        <div className={style.coursecontent}>

                                                            <h3 className={style.cardtitle}>
                                                                <p>Sami AOUAD</p>
                                                            </h3>
                                                            <div className={`${style.wrapper} ${style.borderbottom}`}>
                                                                <div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-8"}>Date de Naissance</div>
                                                                       
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-3"}>Sexe:</div>
                                                                        <div
                                                                            className={"col-4"}>specialite
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Email:</div>
                                                                        <div
                                                                            className={"col-6"}>sami.aouad@gmail.com
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Telephone Cabinet :</div>
                                                                        <div
                                                                            className={"col-6"}>0537598755
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={style.wrapper}>
                                                                <div className={style.courseprice}>
                                                                    <p className={style.authorname}>Mon Experience </p>
                                                                    <p className={style.authorname}>
                                                                    Ce praticien applique des tarifs fixés par l'assurance maladie, sans dépassement d'honoraires
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                        </div>
                        <div className='col-4'>
                                                    <div className={style.coursecard}>
                                                        <div className={style.coursebanner}>
                                                            <img
                                                                src={image}
                                                                alt="course banner"/>
                                                            <button type='submit'
                                                                    className='btn-bg-danger mt-3 '> Demander Un Rendez-Vous 
                                                            </button>
                                                            

                                                        </div>

                                                        <div className={style.coursecontent}>

                                                            <h3 className={style.cardtitle}>
                                                                <p>Sami AOUAD</p>
                                                            </h3>
                                                            <div className={`${style.wrapper} ${style.borderbottom}`}>
                                                                <div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-8"}>Date de Naissance</div>
                                                                       
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-3"}>Sexe:</div>
                                                                        <div
                                                                            className={"col-4"}>specialite
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Email:</div>
                                                                        <div
                                                                            className={"col-6"}>sami.aouad@gmail.com
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={`row ${style.authorname} ${style.textdecorationnone}`}>
                                                                        <div className={"col-6"}>Telephone Cabinet :</div>
                                                                        <div
                                                                            className={"col-6"}>0537598755
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={style.wrapper}>
                                                                <div className={style.courseprice}>
                                                                    <p className={style.authorname}>Mon Experience </p>
                                                                    <p className={style.authorname}>
                                                                    Ce praticien applique des tarifs fixés par l'assurance maladie, sans dépassement d'honoraires
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p></p>
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
 
export default SearchingDoctor;