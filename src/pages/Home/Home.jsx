import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
    <h2 className='titulo'>Cafe Für Elise</h2>
      <Carousel className='carrucel'>
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
      <Card style={{ width: '18rem' , height: '20rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1579306194872-64…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}


export default Home;