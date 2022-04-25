import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*import SignIn from "./Routes/SignIn";
import Register from "./Routes/Register";
import ErrorPage from "./Routes/ErrorPage";
import PatientHomePage from "./Routes/PatientHomePage";
import RDV from "./Routes/RDV";
import DoctorHome from './Routes/DoctorHome';*/
import GestionPatient from './Routes/GestionPatients';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/*<Route path='/doctor/register' element={<Register/>} exact/>
            <Route path={'/error/:code'} element={<ErrorPage/>} exact/>
            <Route path={'/signIn'} element={<SignIn/>} exact/>
            <Route path={'/home'} element={<PatientHomePage/>} exact/>
  <Route path={'/doctor/home'} element={<RDV/>} exact/>*/}
  {/*<Route path={'doctor/home'} element={<DoctorHome/>} exact/>*/}
  <Route path={'doctor/gestionpatient'} element={<GestionPatient/>} exact/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
