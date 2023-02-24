import InputColor from "../InputColor/InputColor";
import InputRange from "../InputRange/InputRange";
import InputText from "../InputText/InputText";
import { useState } from "react";

const Aplicador = () => {
    const [colorHex, setColorHex] = useState('')
    
    const handlerInput = ({target}) => {
        setColorHex(target.value)
        console.log(colorHex)
    }

    const [size, setSize] = useState('')
    
    const handlerInput2 = ({target}) => {
        setSize(target.value)
        console.log(size)
    }
      
  return (
    <div>
        <InputRange valueSa={size} eventoS={handlerInput2}/>   
        <InputText valueColor={colorHex} valueSize={size}/> 
        <InputColor value={colorHex} evento={handlerInput} />
    </div>
  )
}

export default Aplicador