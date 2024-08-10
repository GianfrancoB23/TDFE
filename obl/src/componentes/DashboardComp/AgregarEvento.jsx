import React, {useId} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../../features/categoriasSlice";

const AgregarEvento = () => {
  const navigate = useNavigate();

  const urlAPI = "https://babytracker.develotion.com/";

  const slcCategoria = useId();

  return (
    <div className="container">
      <h2>FORMULARIO DE EVENTO</h2>
      <div className="form-group mt-2">
        <label htmlFor="categorySelect">Categoría</label>
        <select
          className="form-control"
          id="categorySelect"
          name="category"
          required="">
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
      <button type="submit" className="btn btn-primary mt-2">
        CARGAR
      </button>
    </div>
  );
};

export default AgregarEvento;
