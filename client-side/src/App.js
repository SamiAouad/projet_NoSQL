import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <Route path={'/doctor/home'} element={<RDV/>} exact/>
            <Route path={'/rdv'} element={<TakeRdv/>} exact/>
            <Route path={'/doctor/rdv'} element={<RdvDemands/>} exact/>
            <Route path='/patient/rdv' element={<TakeRdv/>} exact/>
            <Route path={'doctor/home'} element={<DoctorHome/>} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
