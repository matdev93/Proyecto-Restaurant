
import Button from 'react-bootstrap/Button';
import {Card, Col, Row, Container} from 'react-bootstrap';




const CardReserve = ({reservas}) => {

  console.log(reservas)

  return (
    <div>
      <div className='tarjetas'>
       <Col style={{textAlign: 'center'}}><h1>Reservas Actuales:</h1></Col>
        <Container>
          <Row className="justify-content-md-center p-5">
            {reservas.map(reserva =>(
              <Col xs lg="2" key={reserva.id}>
              <Card>
                <Card.Body>
                <Card.Title>Reserva de: {reserva.nombre}</Card.Title>
                    <Card.Text>N° de personas: {reserva.persona}</Card.Text>
                    <Card.Text>Dia: {reserva.fecha}</Card.Text>
                    <Card.Text> Hora: {reserva.hora}</Card.Text>
                  <Button variant="warning">Eliminar Reserva</Button>
                </Card.Body>
              </Card>
              </Col>
              ))}
          </Row>
          </Container>
      </div>
     </div>
    )}
            
          
    


export default CardReserve