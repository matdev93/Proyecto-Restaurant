import './catalogo.css'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Row, Col } from 'react-bootstrap';


const Catalogo = () => {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        const getCatalogo = async () => {
            try {
                const collectionRef = collection(db, 'Catalogo');
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data() // firestore guarda la informacion de cada documento en data()
                    data.id = doc.id
                    return data
                })

                setCatalogo(docs)
            } catch (error) {
                console.log(error)
            }
        }

        getCatalogo();

    }, [])
    console.log(catalogo)
    return (
        <div>
            <h1>Productos</h1>
            <Col xs={1} md={3} className="g-4 tarjeta">
                {catalogo.map(producto => (
                    <div key={producto.id}>{producto.Tortas.map(torta => (
                        <Card key={torta.name}>
                            <Card.Img variant="top" src={torta.image} alt={torta.name} style={{ width: '250px' }} />
                            <Card.Body>
                                <Card.Title>{torta.name}</Card.Title>
                                <Card.Text>{torta.description}</Card.Text>
                            </Card.Body>
                            <Button variant='warning'> {torta.price} </Button>
                        </Card>
                    ))
                    }
                    </div>
                ))}
            </Col>
        </div>
    )
}

export default Catalogo;