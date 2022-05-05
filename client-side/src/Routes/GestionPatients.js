import Patients from "./GestionPatient/Patients";
import MyProgram from "./GestionPatient/MyProgram";
import CreateAppoinement from './GestionPatient/CreateAppoinment'
import NavbarDoctor from "./NavbarDoctor";
import AddPrescription from "./GestionPatient/AddPrescription";

const GestionPatient = () => {
    return (
        <div>
            <NavbarDoctor/>
            <Patients/>
            <MyProgram/>
        </div>
    );
}

export default GestionPatient;