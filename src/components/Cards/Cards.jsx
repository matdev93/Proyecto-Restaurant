import './Cards.css'

const Cards = ({datos, aumentoLlamadas, state}) => {
  return (
    <div className="card-container">
        <h2 className="card-name">Su nombre es: {datos.nombre}</h2>
        <p className="card-description">Trabaja como: {datos.profesion}</p>
        <button className="card-button">Llamame</button>
    </div>
  )
}

export default Cards