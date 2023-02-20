
const FechaEnFormato = ({fecha}) => {
  return (
    <div>
        <h2>La fecha y hora es: {fecha.toUTCString()}</h2>
    </div>
  )
}

export default FechaEnFormato