import '../css/DoctorHome.module.css'
import {useNavigate} from "react-router";

const NavbarDoctor = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('user')
        navigate("/")
    }
    return (
        <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid"><a className="navbar-brand" href="/doctor/home"
                                                style={{fontWeight: 'bold'}}>Healtho</a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link active" href="/patient/home" style={{
                            fontWeight: 'bold',
                            color: 'rgb(0,0,0)'
                        }}>Acceuil</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/patient/rdv" style={{
                            fontWeight: 'bold',
                            color: 'rgb(0,0,0)'
                        }}>Mes rendez-vous</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/patient/suivie" style={{
                            fontWeight: 'bold',
                            color: 'rgb(0,0,0)'
                        }}>Mon etat</a></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" onClick={logout}
                                                    style={{color: 'rgb(11,37,69)', fontWeight: 'bold'}}>Deconnexion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavbarDoctor;