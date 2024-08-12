const Tarjeta = ({categoria, catId, fecha, detalle}) => {
  console.log(content);
  console.log(extra);
  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4">
    <div className="card">
      {extra
        .filter((e) => e.id == content.idCategoria)
        .map((e) => (
          <h5 className="card-header">
            {e.tipo}
            <img src={`${urlIMG}${e.imagen}.png`} />
          </h5>
        ))}

      <div className="card-body">
        <h5 className="card-title">{content.fecha}</h5>
        <p className="card-text">{content.detalle}</p>
        <a href="#" className="btn btn-danger">
          Eliminar content
        </a>
      </div>
    </div>
  </div>;
};

export default Tarjeta;
