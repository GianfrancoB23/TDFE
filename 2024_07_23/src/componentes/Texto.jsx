import { useRef, useState } from "react";

const Texto = () => {
    
    //useRef -> Me escribe el import solo.
    //useRefSnippet -> ya da la estructura de lo de abajo.

    let campo = useRef(null);
    const [texto, setTexto] = useState("")

    const actualizar = (e) => {
        //En tiempo real
        setTexto(e.target.value);
    }

    const tomarDato = () => {
        //Al hacer click
        setTexto(campo.current.value);
    }

    return (
        <div>
            <label>Nombre: 
                <input type="text" ref={campo} onChange={actualizar}/>
            </label>
            <p>Caracteres: {texto.length}</p>
            <input type="button" value="Tomar dato" onClick={tomarDato}/>
        </div>
    )
}

export default Texto