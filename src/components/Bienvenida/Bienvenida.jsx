const Bienvenida = ({datos}) => {

    const handlerButton = () => {
        alert(`Has presionado a: ${datos.nombre}`)
    }

  return (
    <div>
        <h1>Bienvenido, {datos.nombre} </h1>
        <button onClick={handlerButton}>Presioname</button>
    </div>
  )
}

export default Bienvenida