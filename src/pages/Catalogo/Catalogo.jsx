
import Button from 'react-bootstrap/Button';
import {Card } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import  { Row } from 'react-bootstrap';


const Catalogo = () => {

    const [catalogo,setCatalogo] = useState([])

    useEffect (() => {
        const getCatalogo = async() => {
            try {
            const collectionRef = collection (db,'Menu');
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
             
                    <Card key={catalogo.id}>
                        <Card.Img variant="top" src={catalogo.image} alt={catalogo.name} style={{width: '250px'}}/>
                        <Card.Body>
                            <Card.Title>{catalogo.name}</Card.Title>
                            <Card.Text>{catalogo.description}</Card.Text>
                        </Card.Body>
                        <Button variant='warning'> {catalogo.price} </Button>
                    </Card>
                
            </Row>
        </div>
    )
}

export default Catalogo;