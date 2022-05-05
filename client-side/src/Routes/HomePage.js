import React, {useEffect} from 'react';
import style from '../css/HomePage.module.css'
import Image from '../images/homePage/Image.png'
import PatientImage from "../images/homePage/Patient.png"
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
            <section className="d-flex flex-column justify-content-between" id={style.SectionId}>
                <div id="Section-top">
                    <nav className="navbar navbar-light navbar-expand-md">
                        <div className="container-fluid"><a className={`navbar-brand ${style.myNavBarBrand}`} href="/"/>
                            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                                <span className="visually-hidden">Toggle navigation</span><span
                                className="navbar-toggler-icon"/></button>
                            <div className={`collapse navbar-collapse ${style.myNavBarCollapse}`} id="navcol-1">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><a className="nav-link active" href="#">Information</a>
                                    </li>
                                    <li className="nav-item"><a className={`nav-link ${style.myNavItem}`}
                                                                href="/doctor/home">Portail-Médecin</a></li>
                                    <li className="nav-item"><a className={`nav-link ${style.myNavItem}`}
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
                    <h1 className="text-center text-white" id={style.title}>Healtho</h1>
                    <h2 className="text-center" id={style.subtitle}><br/><strong>RDV &amp; Suivi avec vos professionnels
                        de santé</strong><br/><br/></h2>
                    <div>
                        <div className="container" id="imageContainer">
                            <div className="row">
                                <div className="col-md-12"><img alt={'main'} src={Image}
                                                                style={{width: '100%', height: 'auto'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Section-bottom">
                    <div className="container" style={{maxWidth: '700px', marginTop: '-64px'}}>
                        <div className="row">
                            <div className="col">
                                <p className="text-center" style={{
                                    fontSize: '18px',
                                    margin: '-2px',
                                    width: '690px',
                                    fontFamily: 'Montserrat, sans-serif'
                                }}><br/>Docteur, êtes-vous à la pointe de la technologie ?<br/><br/></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className={style.parag1}><br/><strong>Gagnez du temps, prenez rendez-vous avec vos
                                    patients</strong><br/><br/></p>
                            </div>
                            <div className="col">
                                <p className={style.parag1}><br/>faciliter l’accès aux soins des patients<br/><br/><br/>
                                </p>
                            </div>
                            <div className="col align-self-center">
                                <a href={'/doctor/register'} className="btn btn-light Register-btn" type="button">Rejoignez-Nous
                                    !&nbsp;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-flex flex-column justify-content-between" id="SectionId-1" style={{width: '100%'}}>
                <div id="Section-top-1">
                    <div className="row" style={{width: '100%', marginRight: 0, marginLeft: 0}}>
                        <div className="col"><img alt={'patient'} src={PatientImage} style={{width: '650px'}}/></div>
                        <div className="col">
                            <p style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                width: '508.6px',
                                marginTop: '74px',
                                height: '36vh',
                                marginBottom: '7px'
                            }}><br/>vous pouvez consulter des médecins généralistes, des spécialistes ou des thérapeutes
                                disponibles pour tous, et rapidement&nbsp;!<br/>L’accompagnement et l’écoute sont
                                inhérents au rétablissement d’un patient. En facilitant les échanges entre le personnel
                                médical et le patient, Healtho propose un suivi permanent<br/><br/></p>
                            <a
                                className="btn btn-light text-center d-xxl-flex justify-content-xxl-center align-items-xxl-center Register-btn"
                                type="button" href={'/patient/register'} style={{width: '76%'}}>Rejoignez-Nous
                                !&nbsp;</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;