import React, {useId, useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Tarjeta from "./Listado/Tarjeta";

const ListadoEventos = ({eventos, cats}) => {
  const filtroFecha = (date) => {
    let fecha = new Date(date);
    let today = new Date();
    let fYear = fecha.getFullYear();
    let fMonth = fecha.getMonth();
    let fDay = fecha.getDate();
    let nYear = today.getFullYear();
    let nMonth = today.getMonth();
    let nDay = today.getDate();
    return fYear == nYear && fMonth == nMonth && fDay == nDay;
  };

  return (
    <div className="container justify-content-center align-items-center text-center mt-4">
      <h2 className="text-center">LISTADO DE EVENTOS</h2>
      <h3>HOY:</h3>
      <div className="row justify-content-center">
        {eventos
          .filter((evento) => filtroFecha(evento.fecha))
          .map((evento, index) => (
            <Tarjeta
              categoria={cats
                .filter((cat) => cat.id == evento.idCategoria)
                .map((cat) => cat)}
              fecha={evento.fecha}
              detalle={evento.detalle}
              id={evento.id}
              key={index}
            />
          ))}
      </div>
      <h3>DÍAS ANTERIORES:</h3>

      <div className="row justify-content-center">
        {eventos
          .filter((evento) => !filtroFecha(evento.fecha))
          .map((evento, index) => (
            <Tarjeta
              categoria={cats
                .filter((cat) => cat.id == evento.idCategoria)
                .map((cat) => cat)}
              fecha={evento.fecha}
              detalle={evento.detalle}
              id={evento.id}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default ListadoEventos;
