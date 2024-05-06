import { Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'


// className="bg-dark ps-5"  dentro de header//*

const Navigation = () => {
  return (
  <> 
    <Navbar variant="light" expand="lg" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar__font">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/locales">Locales</Nav.Link> */}
            <Nav.Link as={NavLink} to="/reservas">Reservas</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link> */}
            <Nav.Link as={NavLink} to="/catalogo">Catalogo</Nav.Link>
            {/* <NavDropdown title='Admin'>
              <NavDropdown.Item as={NavLink} to="/admin/users">Users</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse >
         {/* <Navbar.Brand href="/">
        KfE
      </Navbar.Brand> */}
    </Navbar>
  </>
  );
}

export default Navigation;