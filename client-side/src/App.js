import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from "./Routes/SignIn";
import Register from "./Routes/Register";
import ErrorPage from "./Routes/ErrorPage";
import PatientHomePage from "./Routes/PatientHomePage";
import RDV from "./Routes/RDV";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/doctor/register' element={<Register/>} exact/>
            <Route path={'/error/:code'} element={<ErrorPage/>} exact/>
            <Route path={'/signIn'} element={<SignIn/>} exact/>
            <Route path={'/home'} element={<PatientHomePage/>} exact/>
            <Route path={'/doctor/home'} element={<RDV/>} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
