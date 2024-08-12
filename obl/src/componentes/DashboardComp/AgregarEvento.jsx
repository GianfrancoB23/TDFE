import React, {useId, useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../../features/categoriasSlice";
import departamentosSlice from "../../features/departamentosSlice";

const AgregarEvento = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlAPI = "https://babytracker.develotion.com/";
  useEffect(() => {
    if (localStorage.getItem("apiKey") == null) {
      navigate("/Dashboard");
    } else {
      fetch(`${urlAPI}categorias.php`, {
        headers: {
          "Content-type": "application/json",
          apikey: localStorage.getItem("apiKey"),
          iduser: localStorage.getItem("id"),
        },
      })
        .then((r) => r.json())
        .then((datos) => {
          console.log("Categorias", datos);

          dispatch(guardarCategorias(datos.categorias));
        });
    }
  }, []);
  const cats = useSelector((state) => state.categorias.categorias);
  const [catSel, setCatSel] = useState("");
  const [timeSel, setTimeSel] = useState("");
  const [detSel, setDetSel] = useState("");

  const idSlcCategoria = useId();
  const idFecHora = useId();
  const idDetalles = useId();

  const loadCat = (e) => {};

  const cargarEvento = () => {
    const valorFecHora = fecHoraRef.current.value;
    console.log("Categoria: ", catSel, "Fecha y Hora: ", timeSel, "Detalles: ", detSel);

  }

  return (
    <div className="container">
      <h2>FORMULARIO DE EVENTO</h2>
      <div className="form-group mt-2">
        <label htmlFor={idSlcCategoria}>Categoría</label>
        <select
          className="form-control"
          name={idSlcCategoria}
          required=""
          id={idSlcCategoria}
          onChange={(e) => setCatSel(e.target.value)}
          defaultValue="">
          <option value="" disabled hidden>
              Seleccion
          </option>
          {cats.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.tipo}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor={idFecHora}>Fecha y Hora del Evento</label>
        <input
          type="datetime-local"
          className="form-control"
          id={idFecHora}
          name={idFecHora}
          required=""
          onChange={(e) => setTimeSel(e.target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor={idDetalles}>Detalles</label>
        <textarea
          className="form-control"
          id={idDetalles}
          name={idDetalles}
          rows={3}
          placeholder="Detalles opcionales"
          onChange={(e) => setDetSel(e.target.value)}
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={timeSel == "" || timeSel > Date.now()}
        onClick={cargarEvento}>
        CARGAR
      </button>
    </div>
  );
};

export default AgregarEvento;
