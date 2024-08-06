import { useDispatch } from "react-redux"
import { incrementar } from "../../features/contadorSlice";

const Botones = () => {

    const dispatch = useDispatch();

    const aumentarCuenta = () => {
        dispatch(incrementar())
    }

  return (
    <div>
        <input type="button" value="Incrementar" onClick={aumentarCuenta}/>
    </div>
  )
}

export default Botones