import './Cards.css'
import { useState } from 'react'

const Cards = ({datos, aumento, state}) => {

//   const [totalLlamadas, setTotalLlamadas] = useState(0)

//   const aumentoLlamadas = () => {
//     setTotalLlamadas(totalLlamadas + 1)
//   }

  return (
    <div className="card-container">
        <h2 className="card-name">Su nombre es: {datos.nombre}</h2>
        <p className="card-description">Trabaja como: {datos.profesion}</p>
        <button onClick={aumento} className="card-button">Llamame</button>
        
    </div>
  )
}

export default Cards