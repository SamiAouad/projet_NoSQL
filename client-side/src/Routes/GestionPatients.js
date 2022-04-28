import Patients from "./GestionPatient/Patients";
import MyProgram from "./GestionPatient/MyProgram";
import CreateAppoinement from './GestionPatient/CreateAppoinment'
import NavbarDoctor from "./NavbarDoctor";

const GestionPatient = () => {
    return ( 
        <div>
            <NavbarDoctor/>
            <Patients/>
            <MyProgram/>
            <CreateAppoinement/>
      </div>
       );
}
 
export default GestionPatient;