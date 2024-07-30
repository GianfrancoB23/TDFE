const Usuario = ({ name, dob, picture}) => {
    return (
        <div>
            <img src={picture.large} />
            <h3>{name.last}, {name.first}</h3>
            <p>{dob.age}</p>
        </div>
    )
}

export default Usuario

/* 
    const Usuario = ({nombre, apellido, edad}) => {
  return (
    <div>
        <h3>{apellido}, {nombre}</h3>
        <p>{edad}</p>
    </div>
  )
}
*/