import EliminarEvento from "./EliminarEvento";

const Tarjeta = ({categoria, id, fecha, detalle}) => {
  
  const urlIMG = "https://babytracker.develotion.com/imgs/";  
  
  return  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4">
    <div className="card">
      {/* {categoria
        .filter((e) => e.id == categoria.idCategoria)
        .map((e) => (
          <h5 className="card-header">
            {e.tipo}
            <img src={`${urlIMG}${e.imagen}.png`} />
          </h5>
        ))} */}
        <h5 className="card-header">
            {categoria[0].tipo}
            <img src={`${urlIMG}${categoria[0].imagen}.png`} />
          </h5>

      <div className="card-body">
        <h5 className="card-title">{fecha}</h5>
        <p className="card-text">{detalle}</p>
        {/* <a href="#" className="btn btn-danger">
          Eliminar content
        </a> */}
        <EliminarEvento idEvento={id} key={id} />
      </div>
    </div>
  </div>;
}

export default Tarjeta;
