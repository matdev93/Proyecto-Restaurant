import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
    <>
      <Carousel className='Carrucel'>
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
  <h1>HOLA</h1>
  </>
  )
}


export default Home;