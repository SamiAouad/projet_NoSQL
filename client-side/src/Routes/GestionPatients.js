import Patients from "./GestionPatient/Patients";
import MyProgram from "./GestionPatient/MyProgram";
import CreateAppoinement from './GestionPatient/CreateAppoinment'

const GestionPatient = () => {
    return ( 
        <div>
        <Patients/>
        <MyProgram/>
        <CreateAppoinement/>
      </div>
       );
}
 
export default GestionPatient;