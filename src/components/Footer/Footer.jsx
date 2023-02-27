import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div class="row">
        <div class="enlaces1 col-12 col-md-3">
          <div>
            <h3>Pastelería</h3>
            <ul>
            <li>
            <Link to='/'>Home </Link></li>
            <li><Link to='/catalogo'>Catalogo </Link></li>
            </ul>
          </div>
        </div>
        <div class="enlaces2 col-12 col-md-3">
          <h3>Ayuda</h3>
          <ul>
            <li>
              <a href="#">Tienda Online</a>
            </li>
            <li>
              <a href="#">Certificaciones</a>
            </li>
            <li>
              <a href="#">Banqueteria</a>
            </li>
          </ul>
        </div>
      <div class="enlaces3 col-12 col-md-3">
        <div>
          <h3>Nosotros</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Trabajos</a>
            </li>
            <li>
              <a href="#">Prensa</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        </div>
        <div class="enlaces4 col-12 col-md-3">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Privacidad</a>
            </li>
            <li>
              <a href="#">Términos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
      <p>  © 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</p>
      </div>
    </div>
 
  )
};

export default Footer