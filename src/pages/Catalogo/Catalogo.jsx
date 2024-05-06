import './catalogo.css'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';


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
            <h1 className='catalogo__titulo'>Productos</h1>
            <div className='catalogo'>
                {catalogo.map(producto => (
                    <div className='tarjeta' key={producto.id}>{producto.Tortas.map(torta => (
                        <div key={torta.name} className='tarjeta__contenedor'>
                            <img variant="top" src={torta.image} alt={torta.name} className='tarjeta__imagen'/>
                            <div className='tarjeta__informacion'>
                                <p className='tarjeta__nombre'>{torta.name}</p>
                                <p className='tarjeta__descripcion'>{torta.description}</p>
                            </div>
                            <Button variant='warning'> {torta.price} </Button>
                        </div>
                    ))
                    }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalogo;