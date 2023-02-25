import {Nav,Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

// className="bg-dark ps-5"  dentro de header//*

const Navegador = () => {
  return (
  <header > 
        <Navbar variant="light" expand="lg">
                <Navbar.Brand href="/">
                    {/* <img
                      src={lazo}
                      width="200"
                      height="50"
                      className="d-inline-block align-top"
                      alt="Logo"
                    /> */}
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link as={NavLink} to="/inicio">Inicio</Nav.Link>
                      <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
                      <Nav.Link as={NavLink} to="/locales">Locales</Nav.Link>
                      <Nav.Link as={NavLink} to="/reservas">Reservas</Nav.Link>
                      <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                      <Nav.Link as={NavLink} to="/catalogo">Catalogo</Nav.Link>
                  </Nav>
                </Navbar.Collapse >
          </Navbar>
  </header>
  );
}

export default Navegador;