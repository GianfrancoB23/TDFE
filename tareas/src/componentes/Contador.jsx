import { useSelector } from "react-redux"

const Contador = () => {

    const cuentaActual = useSelector(state => state.contador.cuenta);

    return (
        <h2>{cuentaActual}</h2>
    )
}

export default Contador