import './Footer.css'
import { Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <> 
    <Navbar variant="light" expand="lg" >
      {/* <Navbar.Brand href="/">
        KfE
      </Navbar.Brand> */}
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
    </Navbar>
  </>
  )};







//     <div className='footer'>
//       {/* <Row></Row>
//       <div>
//         <div className="enlaces1 col-12 col-md-3">
//           <div>
//             <h3>Pastelería</h3>
//             <ul>
//             <li>
//             <Link to='/'>Home </Link></li>
//             <li><Link to='/catalogo'>Catalogo </Link></li>
//             <li><Link to='/reservas'>Reservas </Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="enlaces2 col-12 col-md-3">
//           <h3>Ayuda</h3>
//           <ul>
//             <li>
//               Tienda Online
//             </li>
//             <li>
//               Certificaciones
//             </li>
//             <li>
//               Banqueteria
//             </li>
//           </ul>
//         </div>
//       <div className="enlaces3 col-12 col-md-3">
//         <div>
//           <h3>Nosotros</h3>
//           <ul>
//             <li>
//               About
//             </li>
//             <li>
//               Blog
//             </li>
//             <li>
//               Trabajos
//             </li>
//             <li>
//               Prensa
//             </li>
//             <li>
//               Partners
//             </li>
//           </ul>
//         </div>
//         </div>
//         <div className="enlaces4 col-12 col-md-3">
//           <h3>Legal</h3>
//           <ul>
//             <li>
//               Privacidad
//             </li>
//             <li>
//               Términos
//             </li>
//           </ul>
//         </div>
//       </div>
        
//       <Row><Col><div >
//         <p>  © 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</p>
//         </div>
//         </Col>
//         </Row>
//     </div>
    
//   */}
//   )
// };

export default Footer