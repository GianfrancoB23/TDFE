import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {guardarCategorias} from "../features/categoriasSlice";
import {guardarEventos} from "../features/eventosSlice";
import AgregarEvento from "./DashboardComp/AgregarEvento";
import ListadoEvento from "./DashboardComp/ListadoEvento";
import InformeEventos from "./DashboardComp/InformeEventos";
import GraficosEventos from "./DashboardComp/GraficosEventos";
import TiempoRestante from "./DashboardComp/TiempoRestante";
import {Atom} from "react-loading-indicators";

const Dashboard = () => {
  const urlAPI = "https://babytracker.develotion.com/";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* console.log(cats);
  console.log(eventos); */
  const eventos = useSelector((state) => state.eventos.eventos);
  const ctdBiberonesDia = useSelector((state) => state.eventos.ctdBiberones);
  const ctdPanalesDia = useSelector((state) => state.eventos.ctdPanales);
  const lastUpdate = useSelector((state) => state.eventos.lastUpdate);
  const cats = useSelector((state) => state.categorias.categorias);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (
      localStorage.getItem("apiKey") == null ||
      localStorage.getItem("apiKey" == undefined)
    ) {
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
          if (datos.codigo == 200) {
            dispatch(guardarCategorias(datos.categorias));
            fetch(
              `${urlAPI}eventos.php?idUsuario=${localStorage.getItem("id")}`,
              {
                headers: {
                  "Content-type": "application/json",
                  apikey: localStorage.getItem("apiKey"),
                  iduser: localStorage.getItem("id"),
                },
              }
            )
              .then((r) => r.json())
              .then((datos) => {
                dispatch(guardarEventos(datos.eventos));
              })
              .finally(() => setIsLoading(false));
          } else if (datos.codigo == 401) {
            //console.log(datos.codigo, datos.mensaje);
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
            localStorage.clear();
            navigate("/Login");
          } else {
            //console.log(datos.codigo, datos.mensaje);
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
    }
  }, []);
  if (isLoading) {
    return <Atom size="big" style={{fontSize: "35px"}} />;
  }
  return (
    <div>
      <InformeEventos
        eventos={eventos}
        ctdBiberonesDia={ctdBiberonesDia}
        ctdPanalesDia={ctdPanalesDia}
      />
      <AgregarEvento cats={cats} />
      <ListadoEvento eventos={eventos} cats={cats} />
      <GraficosEventos eventos={eventos} cats={cats} />
      <TiempoRestante eventos={eventos} ctdBiberonesDia={ctdBiberonesDia} />
    </div>
  );
};

export default Dashboard;
