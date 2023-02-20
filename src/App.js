import Saludo from "./components/saludo/saludo";
import Despedida from "./components/Despedida/Despedida";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import Reloj from "./components/Reloj/Reloj";
import Cards from "./components/Cards/Cards";
import { useState } from "react";

const App = () => {

  const [totalLlamadas, setTotalLlamadas] = useState(0)

  const aumentoLlamadas = () => {
    setTotalLlamadas(totalLlamadas + 1)
  }
  const user = 'LALALA';

  const profesionales = [
    {
      id: 1,
      nombre: 'Rodrigo Navarrete',
      profesion: 'Profesor de Ingles'
    },
    {
     id: 2,
      nombre: 'Karen Vidal',
      profesion: 'Pochocha'
    }
  ]

 return(
  <div className="container">
    <Saludo name={user}/>
    <Despedida />
    {profesionales.map((profesional) => <Bienvenida datos={profesional} key={profesional.id}/>)}
    <Reloj />
    {profesionales.map((profesional) => <Cards datos={profesional} key={profesional.id} aumento={aumentoLlamadas} state={totalLlamadas}/>)}
    
  </div>
 ) 
}

export default App;