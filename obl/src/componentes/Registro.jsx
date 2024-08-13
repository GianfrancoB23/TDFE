import React, {useEffect, useId, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarDepartamentos} from "../features/departamentosSlice";
import {guardarCiudades} from "../features/ciudadesSlice";
import {toast} from "react-toastify";
import Contenedor from "./Contenedor";

const Registro = () => {
  const navigate = useNavigate();

  const urlAPI = "https://babytracker.develotion.com/";

  const idUserReg = useId();
  const idPassReg = useId();
  const idSlcDpto = useId();
  const idSlcCity = useId();

  const userCampoReg = useRef(null);
  const passCampoReg = useRef(null);
  const slcDptoCampo = useRef(null);
  const slcCityCampo = useRef(null);

  const dispatch = useDispatch();
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  );
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");
  const ciudades = useSelector((state) => state.ciudades.ciudades);

  //Obtengo los departamentos
  useEffect(() => {
    if (
      localStorage.getItem("apiKey") != null ||
      localStorage.getItem("apiKey") != undefined
    ) {
      navigate("/Dashboard");
    } else {
      fetch(`${urlAPI}departamentos.php`)
        .then((r) => r.json())
        .then((datos) => {
          /* console.log("Departamentos", datos); */

          dispatch(guardarDepartamentos(datos.departamentos));
        });
    }
  }, []);

  //Seteo la ciudad en funcion del dpto seleccionado
  const cargarCity = (e) => {
    setDepartamentoSeleccionado(e.target.value);
  };

  useEffect(() => {
    if (departamentoSeleccionado) {
      fetch(`${urlAPI}ciudades.php?idDepartamento=${departamentoSeleccionado}`)
        .then((r) => r.json())
        .then((datos) => {
          /* console.log("Ciudades", datos.ciudades); */
          dispatch(guardarCiudades(datos.ciudades));
        });
    }
  }, [departamentoSeleccionado, dispatch]);

  //Accion al presionar el boton de registrar
  const registrar = () => {
    const userCampo = userCampoReg.current.value;
    const passCampp = passCampoReg.current.value;
    const slcDpto = slcDptoCampo.current.value;
    const slcCity = slcCityCampo.current.value;

    /* console.log(userCampo, passCampp, slcDpto, slcCity); */

    //Comprueba que no este vacio
    if (
      userCampo.length != 0 &&
      passCampp.length != 0 &&
      ((slcDpto.length != 0) != slcCity.length) != 0 &&
      slcDpto != "" &&
      slcCity != ""
    ) {
      /*  console.log("ADENTRO"); */

      const data = {
        usuario: userCampo,
        password: passCampp,
        idDepartamento: slcDpto,
        idCiudad: slcCity,
      };

      fetch(`${urlAPI}/usuarios.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((data) => {
          /* console.log("Respuesta:", data); */
          if (data.codigo == 200) {
            localStorage.setItem("apiKey", data.apiKey);
            localStorage.setItem("id", data.id);
            navigate("/Dashboard");
          } else {
            /*  console.log(data.codigo, data.mensaje); */
            toast.warn(`ERROR: ${data.mensaje}.`, {
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
      toast.error("ERROR: Debe completar todos los campos", {
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
  };

  return (
    <div className="container justify-content-center align-items-center text-center">
      <h2>REGISTRO EN LA APLICACIÓN</h2>
      <label htmlFor={idUserReg}>Usuario</label>
      <input
        type="text"
        className="form-control"
        id={idUserReg}
        placeholder="Ingrese su usuario"
        ref={userCampoReg}
      />

      <label htmlFor={idPassReg}>Contraseña</label>
      <input
        type="password"
        className="form-control"
        id={idPassReg}
        placeholder="Ingrese su contraseña"
        ref={passCampoReg}
      />

      <label htmlFor={idSlcDpto}>Departamento</label>
      <select
        className="form-control"
        id={idSlcDpto}
        ref={slcDptoCampo}
        onChange={cargarCity}
        defaultValue="">
        <option value="" disabled hidden>
          Seleccion
        </option>
        {departamentos.map((departamento) => (
          <option key={departamento.id} value={departamento.id}>
            {departamento.nombre}
          </option>
        ))}
      </select>

      <label htmlFor={idSlcCity}>Ciudad</label>
      <select
        className="form-control"
        id={idSlcCity}
        ref={slcCityCampo}
        defaultValue="">
        <option value="" disabled hidden>
          Seleccion
        </option>
        {ciudades.map((ciudad) => (
          <option key={ciudad.id} value={ciudad.id}>
            {ciudad.nombre}
          </option>
        ))}
      </select>

      <input
        type="button"
        value="REGISTRAR"
        onClick={registrar}
        className="mt-2"
      />
    </div>
  );
};

export default Registro;
