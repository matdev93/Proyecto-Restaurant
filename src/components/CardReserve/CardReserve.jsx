
import Button from 'react-bootstrap/Button';
import {Card, Col, Row, Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { db } from '../../pages/Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';


const CardReserve = () => {
  const [reserva, setReserva] = useState([])
  useEffect (() => {
  const getReserva = async() => {
      try{
      const collectionRef= collection(db, 'reservas')
      const response = await getDocs(collectionRef)

      const docs = response.docs.map((doc)=>{
          const data=doc.data() //firestore guarda la info de cada documento en data()
          data.id=doc.id
          return data
      })
      setReserva(docs);
      }catch(error){
          console.log(error)
      }
  }
  getReserva()
  },[])
  console.log(reserva);

  return (
    <div>
      <div className='tarjetas'>
       <Col style={{textAlign: 'center'}}><h1>Reservas Actuales:</h1></Col>
        <Container>
          <Row className="justify-content-md-center p-5">
            {reserva.map(reserva =>(
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