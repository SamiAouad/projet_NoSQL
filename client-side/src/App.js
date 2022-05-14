//import AcceptPatient from './AcceptPatient';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PatientHomePage from '../src/Routes/PatientHomePage';
import SignIn from "./Routes/SignIn";
import DoctorRegister from "./Routes/DoctorRegister";
import ErrorPage from "./Routes/ErrorPage";
import RDV from "./Routes/RDV";
import PatientRegister from "./Routes/PatientRegister";
import TakeRdv from "./Routes/TakeRdv";
import RdvDemands from "./Routes/RdvDemands";
import HomePage from "./Routes/HomePage";
import DoctorHome from './Routes/DoctorHome';
import GestionPatient from './Routes/GestionPatients';
import DetailPatient from './Routes/DetailPatient';
import SearchingDoctor from "./Routes/SearchingDoctor";
import PatientRDV from "./Routes/PatientRDV";
import AcceptPatient from "./Routes/AcceptPatient";
import Amelioration from "./Routes/Amelioration";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/doctor/home'} element={<DoctorHome/>} exact/>
                <Route path={'/doctor/register'} element={<DoctorRegister/>} exact/>
                <Route path={'/'} element={<HomePage/>} exact/>
                <Route path={'/Signin'} element={<SignIn/>} exact/>
                <Route path={'/DoctorRegister'} element={<DoctorRegister/>} exact/>
                <Route path={'doctor/gestionpatient'} element={<GestionPatient/>} exact/>
                <Route path={'doctor/acceptpatient'} element={<AcceptPatient/>} exact/>
                <Route path={'/doctor/treatment/:id'} element={<DetailPatient/>} exact/>
                <Route path={'patient/home/:error'} element={<PatientHomePage/>} exact/>
                <Route path={'patient/home/'} element={<PatientHomePage/>} exact/>
                <Route path={'patient/search/doctor/:specialty/:city'} element={<SearchingDoctor/>} exact/>
                <Route path={'patient/rdv/'} element={<PatientRDV/>} exact/>
                <Route path={'patient/register/'} element={<PatientRegister/>} exact/>
                <Route path={'/patient/suivie'} element={<Amelioration/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
