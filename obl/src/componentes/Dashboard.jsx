import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {guardarCategorias} from "../features/categoriasSlice";

const Dashboard = () => {
  const urlAPI = "https://babytracker.develotion.com/";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("apiKey") == null) {
      navigate("/Login");
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
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
