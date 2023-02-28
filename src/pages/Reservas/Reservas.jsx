import { useState, useEffect } from 'react';
import { db } from '../../config/Firebase';
import { collection, getDocs, addDoc} from 'firebase/firestore';
import Tarjetareserva from  '../../components/Tarjetareserva'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Reservas = () => {
  return (
    <div>Reservas</div>
  )
}

export default Reservas