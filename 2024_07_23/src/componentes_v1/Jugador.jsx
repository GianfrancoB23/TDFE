//rafce


const Jugador = ({id, nombre, posicion}) => {
  return (
    <div>
        <h3>{nombre}</h3>
        <p>{posicion} ({id})</p>
    </div>
  )
}

export default Jugador

/*

const Jugador = (props) => {
    props.obj.nombre props.obj.posicion
    */