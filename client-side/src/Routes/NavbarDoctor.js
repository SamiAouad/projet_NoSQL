import { Nav , Navbar,NavDropdown , Container} from "react-bootstrap";
import '../css/NavbarPatient.module.css'

const NavbarDoctor = () => {
    return ( 
        <div>
<Navbar className="navbg" expand="lg">
  <Container className="container-fluid ">

    <Navbar.Brand href="#">Healtho</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-center"id="basic-navbar-nav">
      <Nav className="nav   ">
        <Nav.Link className="navlink text-white " href="#home">Acceuil</Nav.Link>
        <Nav.Link className="navlink text-white" href="#RDV">RDV</Nav.Link>
        <NavDropdown  className="navlink text-white " title="Gestion Patients" id="basic-nav-dropdown">
          <NavDropdown.Item   href="#action/3.1">Mes Patients</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bilan</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">résultats d’analyses </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Dossier Patient </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown  className="navlink text-white " title="Gestion des Consultations " id="basic-nav-dropdown">
          <NavDropdown.Item   href="#action/3.1">Acceptation Patient</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Constitution du dossier patient</NavDropdown.Item>
        
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Traitement</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        
     );
}
 
export default NavbarDoctor;