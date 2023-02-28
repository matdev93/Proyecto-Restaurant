
import Button from 'react-bootstrap/Button';
import {Card, Col, Row } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';


const Catalogo = () => {

    const [catalogo,setCatalogo] = useState([])

    useEffect (() => {
        const getCatalogo = async() => {
            try {
            const collectionRef = collection (db,'Catalogo');
            const response = await getDocs(collectionRef);

            const docs= response.docs.map((doc) => {
                const data = doc.data() // firestore guarda la informacion de cada documento en data()
                data.id = doc.id
                return data
            })

            setCatalogo(docs)
        }  catch (error) {
            console.log(error)
        }
    }

    getCatalogo();
    
}, [])
    console.log(catalogo)
    return (
        <div>
            <h1>Productos</h1>
            <Row xs={1} md={2} className="g-4">
                {catalogo.map(dulce => (
                    <Col key={dulce.id}>
                        <Card>
                            <Card.Img variant="top" src={dulce.image} alt={dulce.name} style={{width: '250px'}}/>
                            <Card.Body>
                                <Card.Title>{dulce.title}</Card.Title>
                                <Card.Text>
                                  {dulce.description}
                                </Card.Text>
                            </Card.Body>
                            <Button variant='warning'> {dulce.price} </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Catalogo;