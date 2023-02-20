import { useState } from "react";
import FechaEnFormato from "../FechaEnFormato/FechaEnFormato";

const Reloj = () => {
    const [state, serState] = useState({
        fecha: new Date()
    })

    setInterval(() => {
        serState({ fecha: new Date()})
    }, 1000)

  return (
    <div>
       <FechaEnFormato fecha={state.fecha}/>
    </div>
  )
}

export default Reloj