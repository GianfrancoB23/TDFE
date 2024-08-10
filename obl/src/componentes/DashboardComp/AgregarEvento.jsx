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

  const slcCategoria = useId();

  const loadCat = (e) => {};

  return (
    <div className="container">
      <h2>FORMULARIO DE EVENTO</h2>
      <div className="form-group mt-2">
        <label htmlFor="categorySelect">Categoría</label>
        <select
          className="form-control"
          id="categorySelect"
          name="category"
          required=""
          onChange={(e) => setCatSel(e.target.value)}>
          {cats.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.tipo}
            </option>
          ))}
          {/* agregar los opt */}
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="eventDate">Fecha y Hora del Evento</label>
        <input
          type="datetime-local"
          className="form-control"
          id="eventDate"
          name="eventDate"
          required=""
          onChange={(e) => setTimeSel(e.target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="details">Detalles</label>
        <textarea
          className="form-control"
          id="details"
          name="details"
          rows={3}
          placeholder="Detalles opcionales"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={timeSel == "" || timeSel > Date.now()}>
        CARGAR
      </button>
    </div>
  );
};

export default AgregarEvento;
