import AcceptPatient from './AcceptPatient';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from "./Routes/SignIn";
import DoctorRegister from "./Routes/DoctorRegister";
import ErrorPage from "./Routes/ErrorPage";
import PatientHomePage from "./Routes/PatientHomePage";
import RDV from "./Routes/RDV";
import PatientRegister from "./Routes/PatientRegister";
import TakeRdv from "./Routes/TakeRdv";
import RdvDemands from "./Routes/RdvDemands";
import HomePage from "./Routes/HomePage";
import DoctorHome from './Routes/DoctorHome';
import AcceptPatient from './Routes/AcceptPatient';
/*import SignIn from "./Routes/SignIn";
import Register from "./Routes/Register";
import ErrorPage from "./Routes/ErrorPage";
import PatientHomePage from "./Routes/PatientHomePage";
import RDV from "./Routes/RDV";
import DoctorHome from './Routes/DoctorHome';*/
import GestionPatient from './Routes/GestionPatients';
import PatientPage from "./Routes/PatientPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} exact/>
                <Route path='/doctor/register' element={<DoctorRegister/>} exact/>
                <Route path='/patient/register' element={<PatientRegister/>} exact/>
                <Route path={'/error/:code'} element={<ErrorPage/>} exact/>
                <Route path={'/signIn'} element={<SignIn/>} exact/>
                <Route path={'/home'} element={<PatientHomePage/>} exact/>
                <Route path={'/rdv'} element={<TakeRdv/>} exact/>
                <Route path={'/doctor/rdv'} element={<RdvDemands/>} exact/>
                <Route path='/patient/rdv' element={<TakeRdv/>} exact/>
                <Route path={'/doctor/home'} element={<DoctorHome/>} exact/>
                <Route path={'/patient/home'} element={<PatientHomePage/>} exact/>*/}
                <Route path={'/doctor/home'} element={<RDV/>} exact/>
                <Route path={'/patient/home'} element={<PatientHomePage/>} exact/>
                <Route path={'doctor/acceptpatient'} element={<AcceptPatient/>} exact/>
                {/*<Route path={'doctor/home'} element={<DoctorHome/>} exact/>*/}
                <Route path={'doctor/gestionpatient'} element={<GestionPatient/>} exact/>
                <Route path={'doctor/acceptpatient'} element={<AcceptPatient/>} exact/>
                <Route path={'patient/:id'} element={<PatientPage/>} exact/>


            </Routes>
        </BrowserRouter>
    );
}

export default App;
