import './Footer.css'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
      <Row></Row>
      <div>
        <div className="enlaces1 col-12 col-md-3">
          <div>
            <h3>Pastelería</h3>
            <ul>
            <li>
            <Link to='/'>Home </Link></li>
            <li><Link to='/catalogo'>Catalogo </Link></li>
            </ul>
          </div>
        </div>
        <div className="enlaces2 col-12 col-md-3">
          <h3>Ayuda</h3>
          <ul>
            <li>
              Tienda Online
            </li>
            <li>
              Certificaciones
            </li>
            <li>
              Banqueteria
            </li>
          </ul>
        </div>
      <div className="enlaces3 col-12 col-md-3">
        <div>
          <h3>Nosotros</h3>
          <ul>
            <li>
              About
            </li>
            <li>
              Blog
            </li>
            <li>
              Trabajos
            </li>
            <li>
              Prensa
            </li>
            <li>
              Partners
            </li>
          </ul>
        </div>
        </div>
        <div className="enlaces4 col-12 col-md-3">
          <h3>Legal</h3>
          <ul>
            <li>
              Privacidad
            </li>
            <li>
              Términos
            </li>
          </ul>
        </div>
      </div>
        
      <Row><Col><div >
        <p>  © 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</p>
        </div>
        </Col>
        </Row>
    </div>
    
 
  )
};

export default Footer