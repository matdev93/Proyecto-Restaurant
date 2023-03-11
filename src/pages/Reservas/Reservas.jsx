import { useState } from 'react';
import { db } from '../Config/Firebase';
import { collection, addDoc} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardReserve from '../../components/CardReserve/CardReserve';


const Reservas = () => {
  // const [reserva, setReserva] = useState([])

    const valoresIniciales={
        fecha:'',
        hora:'',
        persona:'',
        nombre:''

    }

    const [user, setUser] = useState(valoresIniciales)
    
    const catchInputs= (e) =>{
      e.preventDefault()
      const {name,value}=e.target;
      setUser({
        ...user,
        [name]: value
      })
    }

    const reservarMesa=async(e)=>{
      e.preventDefault()
      try{
        const collectionRef2=collection(db, 'reservas')
        await addDoc(collectionRef2, {
            ...user
        })
      }catch(error) {
          console.log(error)
      }
      setUser({...valoresIniciales})
      return window.location.reload(true)
    }
  return (
    <div>
    <Form className='m-4 p-4' onSubmit={reservarMesa}>
      <h2>Reserva tu hora para una mejor atención: </h2>
      <fieldset>
        <Form.Group className="mb-3 m-2">
          <Form.Label htmlFor="disabledTextInput">Nombre de la reserva:  </Form.Label>
          <Form.Control onChange={catchInputs} value={user.nombre} required name='nombre' id="disabledTextInput" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3 m-2">
          <Form.Label htmlFor="disabledSelect">Cantidad de personas</Form.Label>
          <Form.Select onChange={catchInputs} value={user.persona} required name='persona' id="disabledSelect">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <div>
              <div className="row">
                  <div className="col-md-4 m-2">
                      <Form.Group controlId="dob">
                          <Form.Label>Fecha a reservar</Form.Label>
                          <Form.Control onChange={catchInputs} value={user.fecha} required type="date" name="fecha" placeholder="Date" />
                      </Form.Group>
                  </div>
              </div>
          </div>
          <div>
              <div className="row">
                  <div className="col-md-4 m-2">
                      <Form.Group controlId="dob">
                          <Form.Label>Hora de la reserva</Form.Label>
                          <Form.Control onChange={catchInputs} value={user.hora} required type="time" name="hora" placeholder="time" />
                      </Form.Group>
                  </div>
              </div>
          </div>
          <Form.Check 
              required
              className='m-2'
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Confirmar Reserva"
          />
        </Form.Group>
        <Button type="submit" variant='warning' className='m-2'>Reservar</Button>
      </fieldset>
    </Form>
    
    <CardReserve />
</div>
  )
}

export default Reservas