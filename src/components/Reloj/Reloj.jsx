import { Component, useState } from "react";
import FechaEnFormato from "../FechaEnFormato/FechaEnFormato";

const Reloj = () => {
    const [state, setState] = useState({
        fecha: new Date()
    })

    setInterval(() => {
        setState({ fecha: new Date()})
    }, 1000)

  return (
    <div>
       <FechaEnFormato fecha={state.fecha}/>
    </div>
  )
}

export default Reloj