import { useEffect, useState } from "react";

const Contador = () => {

    const [cuenta, setCuenta] = useState(0);
    const [cuenta2, setCuenta2] = useState(0)

    useEffect(() => {
        document.title = `Cuenta: ${cuenta} - Cuenta2: ${cuenta2}`;
    }, [cuenta, cuenta2])

    const contar = e => {
        console.log(e);
        setCuenta(cuenta + 1);
    }

  return (
    <div>
        <input type="button" value="Contar" onClick={contar} />
        <h1>{cuenta}</h1>

        <input type="button" value="Contar 2" onClick={()=>{setCuenta2(cuenta2 + 1)}} />
        <h2>{cuenta2}</h2>
    </div>
  )
}

export default Contador