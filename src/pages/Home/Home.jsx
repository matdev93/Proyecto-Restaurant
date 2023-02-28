import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {Card, Col, Row } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Row >
        <Col><div className='col-12'><h2 className='titulo'>Cafe Für Elise</h2></div>
        <div>
        <Carousel className='carrucel text-center'>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1582659042116-63f96b514135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Con nuestras mejores recetas artesanales</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1583331030773-1ac64d1d00db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Una de las pastelerias más destacadas de sur de Chile</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div>
        <h1>Sabores con tradiciones alemanas</h1>
      <div className='Cartas'>
      <Card style={{ width: '18rem' , height: '20rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80" />
        <Card.Body>
          <Card.Title>Tortas y Pasteles</Card.Title>
          <Card.Text>
          Deliciosas tortas y pasteles con la más tradición alemana con ingredientes seleccionados por un equipo apasionado por su cocina tradicional.

Para más detalle ingresar a nuestro catalogo con muchas variedades:
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , height: '20rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1561339405-e1dd0d129449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Card.Body>
          <Card.Title>Kuchenes</Card.Title>
          <Card.Text>
           Kuchenes con recetas transcurridas de generacion en generacion y ahora llegada a nuestros clientes para que puedan disfrutar de un sabor único e irrepetible.

Para más detalle ingresar a nuestro catalogo con muchas variedades:
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , height: '20rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576437957780-1f21b8bcdbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80s" />
        <Card.Body>
          <Card.Title>Strudel y más</Card.Title>
          <Card.Text>
          Pretzel, Apfelstrudel, Bavaroise y más productos de la cocina germana.

Para más detalle ingresar a nuestro catalogo con muchas variedades:
          </Card.Text>
          <Button variant="warning"><Link to='/catalogo'>Ir a catalogo</Link></Button>
        </Card.Body>
      </Card>
      </div>
    </div>
    </Col>
    </Row>
  </div>
  )
}


export default Home;