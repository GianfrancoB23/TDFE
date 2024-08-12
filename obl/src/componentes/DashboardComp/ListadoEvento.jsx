import React, { useId, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { guardarCategorias } from "../../features/categoriasSlice";
import { guardarEventos } from "../../features/eventosSlice";
import Tarjeta from "./Listado/Tarjeta";

const ListadoEventos = ({ eventos, cats }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlAPI = "https://babytracker.develotion.com/";
  const urlIMG = "https://babytracker.develotion.com/imgs/";
  /* const cats = useSelector((state) => state.categorias.categorias); 
  
  const eventos = useSelector((state) => state.eventos.eventos); */
  console.log(cats);
  console.log(eventos);

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
    <div className="container justify-content-center align-items-center text-center ">
      <h2>Listado de eventos</h2>
      <h3>Hoy</h3>
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
      <h3>Días anteriores</h3>

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
