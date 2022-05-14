import React, {useEffect} from 'react';
import styleHP from '../css/HomePage.module.css'
import Image from '../images/homePage/Image.png'
import imagesec from '../images/homePage/Doctor.png'
import {useNavigate} from "react-router";

function HomePage() {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div>
            <section id={styleHP.SectionId}>
                <div id="Section-top">
                    <nav className="navbar navbar-light navbar-expand-md">
                        <div className="container-fluid"><a className={`navbar-brand ${styleHP.myNavBarBrand}`}
                                                            href="/"/>
                            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                                <span className="visually-hidden">Toggle navigation</span><span
                                className="navbar-toggler-icon"/></button>
                            <div className={`collapse navbar-collapse ${styleHP.myNavBarCollapse}`} id="navcol-1">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><a className="nav-link active" href="#">Information</a>
                                    </li>
                                    <li className="nav-item"><a className={`nav-link ${styleHP.myNavItem}`}
                                                                href="/doctor/home">Portail-Médecin</a></li>
                                    <li className="nav-item"><a className={`nav-link ${styleHP.myNavItem}`}
                                                                href="/patient/home">Portail-Patient</a></li>
                                </ul>
                                {
                                    localStorage.getItem('user') ?
                                        <>
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link active"
                                                       onClick={logout}>Deconnexion
                                                    </a>
                                                </li>
                                                <li className="nav-item"><a className="nav-link active"
                                                >{user.firstName} {user.lastName}</a>
                                                </li>
                                            </ul>
                                        </>
                                        :
                                        <>
                                            <ul className="navbar-nav">
                                                <li className="nav-item"><a className="nav-link active"
                                                                            href="/signin">Connexion</a>
                                                </li>

                                            </ul>
                                        </>
                                }

                            </div>
                        </div>
                    </nav>
                    <h1 id={styleHP.title}>Votre Platforme E-Health</h1>
                    <h2 className="text-center" id={styleHP.subtitle}><br/><strong>RDV &amp; Suivi avec vos
                        professionnels
                        de santé</strong></h2>
                    <div>
                        <div className="container">
                            <div className="row" id={styleHP.myrow}>
                                <div className="col-md-12">
                                    <img alt={'main'} src={Image} className={styleHP.myimage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styleHP.mysecsection}>

                <div>
                    <div className="row" id={styleHP.myrow}>
                        <div className="col-5" id={styleHP.mydiv}>
                            <p className={styleHP.mysectitle}>Docteur, êtes-vous à la pointe de la technologie ?</p>
                            <p className={styleHP.parag1}>Découvrez la prise de rendez-vous en ligne
                                <br/> Gérez vos disponibilités avec simplicité
                                Réduisez les rendez-vous non honorés<br/>
                                Offrez une expérience exceptionnelle à tous vos patients</p>
                            <a href={'/doctor/register'} className={styleHP.mybutton} type="button">Rejoignez-Nous
                                !&nbsp;</a>
                        </div>
                        <div className="col-4">
                            <img alt={'main'} src={imagesec} className={styleHP.mysecimage}/>
                        </div>
                    </div>

                </div>


            </section>
            <section className={styleHP.mythirdsection}>

                <div>
                    <div className="row" id={styleHP.myrow}>
                        <div className="col" id={styleHP.mydiv}>
                            <p className={styleHP.mytitle}>Cher Patient </p>
                            <p className={styleHP.parag1}>Recherchez une spécialité puis choisissez le praticien et
                                l'horaire qui vous conviennent.
                                <br/>Bénéficiez d'un avis, d’un diagnostic et si nécessaire d'une ordonnance valable en
                                pharmacie, accessible en ligne depuis votre espace personnel.</p>
                        </div>
                        <div className="col " id={styleHP.mybtn}>
                            <a href={'/patient/register'} className={styleHP.mybutton} type="button">Rejoignez-Nous
                                !&nbsp;</a>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
}

export default HomePage;