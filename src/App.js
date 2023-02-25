// import Saludo from "./components/saludo/saludo";
// import Despedida from "./components/Despedida/Despedida";
// import Bienvenida from "./components/Bienvenida/Bienvenida";
// import Reloj from "./components/Reloj/Reloj";
// import Cards from "./components/Cards/Cards";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button'
//*********                 Pruebas 2               *************/

// Rutas: Inicio, Nosotros, Locales, Tienda Online, Contacto y telefonos -----
// Importantes: Header, Footer, Formulario y Reserva, Catalogo -------
// Hora en pagina

import './App.css';
import Rutas from '.routes/Rutas/Rutas'

const App = () => {
  return(
    <div>
      <Rutas />
    </div>
  );
}




//*********                 Pruebas 2                ***********/


// // const App = () => {

// //   const [open, setOpen] = useState(false)
// //   const [totalLlamadas, setTotalLlamadas] = useState(0)

// //   const openDoor = () => {
// //     setOpen(true)
// //   }

// //   const closeDoor = () => {
// //     setOpen(false)
// //   }

// //   const aumentoLlamadas = () => {
// //     setTotalLlamadas(totalLlamadas + 1)
// //     console.log(totalLlamadas)
// //   }
// //   const user = 'LALALA';

// //   const profesionales = [
// //     {
// //       id: 1,
// //       nombre: 'Rodrigo Navarrete',
// //       profesion: 'Profesor de Ingles'
// //     },
// //     {
// //      id: 2,
// //       nombre: 'Karen Vidal',
// //       profesion: 'Diseñadora Grafica'
// //     }
// //   ]

// //  return(
// //   <div className="container">
// //     <Saludo name={user}/>
// //     <Despedida />
// //     {profesionales.map((profesional) => <Bienvenida datos={profesional} key={profesional.id}/>)}
// //     <Reloj />
// //     <h3>{totalLlamadas > 10 ? 'Tienes mas de 10 llamadas' : 'Llamadas insuficientes'}</h3>
// //     {profesionales.map((profesional) => <Cards datos={profesional} key={profesional.id} aumento={aumentoLlamadas} state={totalLlamadas}/>)}
// //     <h3>La puerta esta: {open ? 'Abierta' : 'Cerrada'}</h3>
// //     <Button  variant="success" onClick={openDoor} >Abrir</Button>
// //     <Button variant="danger" onClick={closeDoor} >Cerra</Button>
    
// //   </div>
// //  ) 
// }

export default App;