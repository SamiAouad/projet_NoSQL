import styleND from '../css/DoctorHome.module.css'
import {useNavigate} from "react-router";

const NavbarDoctor = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('user')
        navigate("/")
    }
    return (
        <div>
            <section>
            <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid"><a className={`navbar-brand ${styleND.myNavBarBrand}`} href="/"/>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link active" href="/doctor/home" style={{
                            fontWeight: 'bold',
                            color: '  #131126'
                        }}>Rendez-Vous</a></li>
                        <li className="nav-item"><a className="nav-link" href="/doctor/gestionpatient"
                                                    style={{color: '#131126', fontWeight: 'bold'}}>Gestion
                            Patient</a></li>
                        <li className="nav-item"><a className="nav-link" href="/doctor/acceptpatient"
                                                    style={{color: '#131126', fontWeight: 'bold'}}>Gestion
                            Consultation</a></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" href="#"
                                                    style={{fontWeight: 'bold', color: '#131126'}}>Acceuil</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" onClick={logout}
                                                    style={{color: '#131126', fontWeight: 'bold'}}>Deconnexion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </section>
        </div>
      

    );
}

export default NavbarDoctor;