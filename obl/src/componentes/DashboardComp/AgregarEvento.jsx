import React, {useId, useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../../features/categoriasSlice";
import {guardarEvento} from "../../features/eventosSlice";

const AgregarEvento = ({cats}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlAPI = "https://babytracker.develotion.com/";
  /* useEffect(() => {
    if (localStorage.getItem("apiKey") == null || localStorage.getItem("apiKey") == undefined) {
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
          dispatch(guardarCategorias(datos.categorias));
        });
    }
  }, []); */
  //const cats = useSelector((state) => state.categorias.categorias);
  const [catSel, setCatSel] = useState("");
  const [timeSel, setTimeSel] = useState("");
  const [detSel, setDetSel] = useState("");

  const idSlcCategoria = useId();
  const idFecHora = useId();
  const idDetalles = useId();

  const cargarEvento = () => {
    if (timeSel.length == 0) {
      setTimeSel(new Date());
    }

    if (catSel.length != 0) {
      // Cargo el evento

      const data = {
        idCategoria: catSel,
        idUsuario: localStorage.getItem("id"),
        detalle: detSel,
        fecha: formatearFecha(timeSel),
      };

      fetch(`${urlAPI}/eventos.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: localStorage.getItem("apiKey"),
          iduser: localStorage.getItem("id"),
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((datos) => {
          console.log("Respuesta:", datos);
          if (datos.codigo == 200) {
            toast.success("Evento cargado con exito!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            dispatch(guardarEvento(data));
          } else {
            console.log(datos.codigo, datos.mensaje);
            toast.warn(`ERROR: ${datos.mensaje}.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } else {
      toast.warn("ERROR: Seleccione una categoria.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const seleccionarHora = (e) => {
    const inputFechaHora = e.target.value;
    const nuevaFecha = new Date(inputFechaHora);
    const fechaActual = new Date();

    if (nuevaFecha > fechaActual) {
      toast.error(
        `ERROR: La fecha no puede ser superior a la actual ${formatearFecha(
          fechaActual
        )}`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setTimeSel("");
    } else {
      setTimeSel(inputFechaHora);
    }
  };

  //Realizado con chatGPT para ahorrar tiempo.
  const formatearFecha = (fechSinFormatear) => {
    const date = new Date(fechSinFormatear);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

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
          <option value="" disabled>
            Seleccione
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
          onChange={seleccionarHora}
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
        type="button"
        className="btn btn-primary mt-2"
        disabled={timeSel == "" || new Date(timeSel) > Date.now()}
        onClick={cargarEvento}>
        CARGAR
      </button>
    </div>
  );
};

export default AgregarEvento;
