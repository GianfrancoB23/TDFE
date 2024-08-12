import React, {useId, useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../../features/categoriasSlice";
import {guardarEventos} from "../../features/eventosSlice";
import Tarjeta from "./Listado/Tarjeta";

const ListadoEventos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlAPI = "https://babytracker.develotion.com/";
  const urlIMG = "https://babytracker.develotion.com/imgs/";
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
          dispatch(guardarCategorias(datos.categorias));
        });
      fetch(`${urlAPI}eventos.php?idUsuario=${localStorage.getItem("id")}`, {
        headers: {
          "Content-type": "application/json",
          apikey: localStorage.getItem("apiKey"),
          iduser: localStorage.getItem("id"),
        },
      })
        .then((r) => r.json())
        .then((datos) => {
          dispatch(guardarEventos(datos.eventos));
        });
    }
  }, []);

  const cats = useSelector((state) => state.categorias.categorias);
  const eventos = useSelector((state) => state.eventos.eventos);

  const filtroFecha = (date) => {
    let fecha = new Date(date);
    let today = new Date();
    let fYear = fecha.getFullYear();
    let fMonth = fecha.getMonth();
    let fDay = fecha.getDate();
    let nYear = today.getFullYear();
    let nMonth = today.getMonth();
    let nDay = today.getDate();
    console.log(`${fecha} || ${fYear} ${fMonth} ${fDay}`);
    console.log(`${today} || ${nYear} ${nMonth} ${nDay}`);
    console.log(fYear == nYear && fMonth == nMonth && fDay == nDay);
    return fYear == nYear && fMonth == nMonth && fDay == nDay;
  };
  console.log(cats);
  console.log(eventos);

  return (
    <div className="container justify-content-center align-items-center text-center ">
      <h2>Listado de eventos</h2>
      <h3>Hoy</h3>
      <div className="row justify-content-center">
        {eventos
          .filter((evento) => filtroFecha(evento.fecha))
          .map((evento) => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4">
              <div className="card">
                {cats
                  .filter((cat) => cat.id == evento.idCategoria)
                  .map((cat) => (
                    <h5 className="card-header">
                      {cat.tipo}
                      <img src={`${urlIMG}${cat.imagen}.png`} />
                    </h5>
                  ))}

                <div className="card-body">
                  <h5 className="card-title">{evento.fecha}</h5>
                  <p className="card-text">{evento.detalle}</p>
                  <a href="#" className="btn btn-danger">
                    Eliminar evento
                  </a>
                </div>
              </div>
            </div>
          ))}
        {/* {eventos
          .filter((evento) => filtroFecha(evento.fecha))
          .map((evento) => (
            <Tarjeta {{cats.filter((cat => cat.id == evento.idCategoria)).map(cat => cat.tipo)}, {cats.filter((cat => cat.id == evento.idCategoria)).map(cat => cat.idCategoria)}, evento.fecha, evento.detalle} />
          ))} */}
      </div>
      <h3>Días anteriores</h3>

      <div className="row justify-content-center">
        {eventos
          .filter((evento) => !filtroFecha(evento.fecha))
          .map((evento) => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4">
              <div className="card">
                {cats
                  .filter((cat) => cat.id == evento.idCategoria)
                  .map((cat) => (
                    <h5 className="card-header">
                      {cat.tipo}
                      <img src={`${urlIMG}${cat.imagen}.png`} />
                    </h5>
                  ))}

                <div className="card-body">
                  <h5 className="card-title">{evento.fecha}</h5>
                  <p className="card-text">{evento.detalle}</p>
                  <a href="#" className="btn btn-danger">
                    Eliminar evento
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListadoEventos;
