import React, {useId, useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../../features/categoriasSlice";
import {guardarEventos} from "../../features/eventosSlice";

const ListadoEventos = () => {
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
  console.log(cats);
  console.log(eventos);

  return (
    <div>
      FOO BAR
      <h2>Hoy</h2>
      <h2>Días anteriores</h2>
    </div>
  );
};

export default ListadoEventos;
