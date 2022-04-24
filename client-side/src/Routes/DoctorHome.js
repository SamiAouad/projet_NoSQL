import  style from  '../css/DoctorHome.module.css'
import image from '../images/doctorhome/doctor.jpg'
const DoctorHome = () => {
    return ( 
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>MesPatients</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap" />
        <link rel="stylesheet" href="assets/css/Contact-Form-Clean.css" />
        <link rel="stylesheet" href="assets/css/styles.css" />
        <section id={style.SectionOneId}>
          <div id={style.SectionUp}>
            <nav className="navbar navbar-light navbar-expand-md">
              <div className="container-fluid"><a className="navbar-brand" href="#" style={{fontWeight: 'bold'}}>Healtho</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link active" href="#" style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>Rendez-Vous</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(11,37,69)', fontWeight: 'bold'}}>Gestion Patient</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(11,37,69)', fontWeight: 'bold'}}>Gestion Consultation</a></li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="#" style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>Acceuil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(11,37,69)', fontWeight: 'bold'}}>Deconnexion</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <h1 className="text-center" id={style.title} style={{fontWeight: 'bold', fontSize: '35px'}}>Portail Consultation&nbsp;</h1>
          </div>
          <div id={style.Sectionmiddle}>
            <div className="container">
              <div className="row" style={{marginTop: '70px'}}>
                <div className="col-md-6 align-self-center" id={style.mycolumn}>
                  <p className="text-center" id={style.mypara} style={{fontSize: '27px', fontWeight: 'bold'}}>Consultation de la journée</p>
                </div>
                <div className="col-md-6">
                  <div className="table-responsive text-start" style={{fontSize: '13px', borderStyle: 'none'}}>
                    <table className="table table-striped table-bordered">
                      <thead id={style.Thead}>
                        <tr>
                          <th>Id</th>
                          <th><br />Image</th>
                          <th>N°Patient</th>
                          <th>N°Dossier</th>
                          <th>Traitement</th>
                          <th>Date</th>
                          <th>Horaire</th>
                          <th>Urgence</th>
                        </tr>
                      </thead>
                      <tbody id={style.Tbody}>
                        <tr style={{color: 'rgb(255,255,255)'}}>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 2</td>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 2</td>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                        </tr>
                        <tr>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: '70px'}}>
                <div className="col-md-6 align-self-center"  style={{width: '463px'}}>
                  <p className="text-center" id="mypara-1" style={{fontSize: '27px', fontWeight: 'bold', color: '#0b2545'}}>Dernières Consultations</p>
                </div>
                <div className="col-md-6">
                  <div className="table-responsive text-start" style={{fontSize: '13px', borderStyle: 'none'}}>
                    <table className="table table-striped table-bordered">
                      <thead  style={{background: 'linear-gradient(90deg, #66ddc9, #0b2545 100%), #ffffff', fontWeight: 'bold', color: 'rgb(255,255,255)'}}>
                        <tr>
                          <th>Id</th>
                          <th><br />Image</th>
                          <th>N°Patient</th>
                          <th>N°Dossier</th>
                          <th>Traitement</th>
                          <th>Date</th>
                          <th>Horaire</th>
                          <th>Urgence</th>
                        </tr>
                      </thead>
                      <tbody style={{background: '#0b2545'}}>
                        <tr style={{color: 'rgb(255,255,255)'}}>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 2</td>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 2</td>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                        </tr>
                        <tr style={{background: '#0b2545', color: 'rgb(255,255,255)', fontWeight: 'bold'}}>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                          <td>Cell 4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={style.SectionTwoId} style={{width: '100%', height: '100vh'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6" id={style.myCol} style={{height: '136px'}}><img src={image} style={{width: '80%', borderStyle: 'none', borderRadius: '5px'}} /></div>
              <div className="col-md-6">
                <section className={style.contactclean} style={{background: '#0b2545', marginTop: '90px'}}>
                  <form method="post" style={{background: '#66ddc9'}}>
                    <h2 className="text-center" style={{color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', textAlign: 'center'}}>Programme de votre Semaine</h2>
                    <div className="mb-3">
                      <p>Quels Sont vos Jours de Travail ?</p><select className="form-select">
                        <option value={12} selected>Lundi-Vendredi</option>
                        <option value={13}>Lundi-Samedi</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <p>Horaires de travail :&nbsp;</p>
                    </div><select className="form-select">
                      <option value={12} selected>09:00-17:00</option>
                      <option value={13}>08:00-16:00</option>
                      <option value={14}>08:00-14:00</option>
                      <option value>09:00-15:00</option>
                    </select>
                    <div className="mb-3"><button className={`btn ${style.btnprimary} ${style.reservebtn}`  }  type="button">Enregistrez</button></div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
     );
}
 
export default DoctorHome;