
import Button from 'react-bootstrap/Button';
import {Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react'

// var productos =[
//     {id: 1, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80'},
//     {id: 2, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80'},
//     {id: 3, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'},
//     {id: 4, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'},
//     {id: 5, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'},
//     {id: 6, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1557925923-33b27f891f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80'},
//     {id: 7, grupo: 'Tortas y Pasteles', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1608830597604-619220679440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    
//     {id: 8, grupo: 'Kuchenes', titulo: 'Pie de Limon',  descripcion: 'Tradicional pie de limon...', precio: '$23.000', url: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
//     {id: 9, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 10, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://plus.unsplash.com/premium_photo-1666353534372-370c07a92658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 11, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1609355109553-3bb67c76b1f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
//     {id: 12, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1614174486496-344ef3e9d870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'},
//     {id: 13, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1557163638-71e3ad2d3a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 14, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1561924607-7e9b21fb51ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
//     {id: 15, grupo: 'Kuchenes', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1460380410874-537ecece3984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80'},
    
//     {id: 16, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1657313938000-23c4322dbe22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 17, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},
//     {id: 18, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
//     {id: 19, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://plus.unsplash.com/premium_photo-1666353534539-32710fad71ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 20, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1613775464335-2a75b4237f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
//     {id: 21, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//     {id: 22, grupo: 'Strudel y mas', titulo: 'Torta Amor',  descripcion: 'La torta amor es una exquisita preparación de hojarasca con relleno de manjar, crema pastelera y mermelada de frambuesa.', precio: '$23.000', url: 'https://images.unsplash.com/photo-1602791550437-3aa20a167ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},

// ];

const Catalogo = () => {

    const [catalogo,setCatalogo] = useState([])

    useEffect (() => {
        const getCatalogo = async() => {
            const response = await axios('https://fakestoreapi.com/products');
            const data = await response.data;
            setCatalogo(data)
        }
        getCatalogo();
    }, [])

    return (
        <div>
            <h1>Productos</h1>
            <Row xs={1} md={2} className="g-4">
                {catalogo.map((catalogo) => (
                    <Col key={catalogo.id}>
                        <Card>
                            <Card.Img variant="top" src={catalogo.image} alt="..." style={{width: '250px'}}/>
                            <Card.Body>
                                <Card.Title>{catalogo.title}</Card.Title>
                                <Card.Text>
                                    {catalogo.description}
                                </Card.Text>
                            </Card.Body>
                            <Button variant='warning'> Agregar </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Catalogo;