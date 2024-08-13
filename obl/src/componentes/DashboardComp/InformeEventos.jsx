import React, {useId, useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {
  guardarEventos,
  incrementarBiberon,
  resetBiberon,
  incrementarPanal,
  resetPanal,
  guardarUltimaFecha,
} from "../../features/eventosSlice";

const InformeEventos = ({eventos, ctdBiberonesDia, ctdPanalesDia}) => {
  const dispatch = useDispatch();

  let fechaMinima = new Date();
  let fechaMaxima = new Date();
  fechaMinima.setHours(0, 0, 0, 0);
  fechaMaxima.setHours(23, 59, 59, 59);
  let fechaBase = new Date("2023-01-01");
  let fechaUltimoBiberon = fechaBase;
  let fechaUltimoPanal = fechaBase;

  const [ultimaActualizacionBiberon, setUltimaActualizacionBiberon] =
    useState(null);
  const [ultimaActualizacionPanales, setUltimaActualizacionPanales] =
    useState(null);
  const [tiempoTranscurridoBiberon, settiempoTranscurridoBiberon] =
    useState(null);
  const [tiempoTranscurridoPanal, settiempoTranscurridoPanal] = useState(null);

  /*  */ // Calcula los conteos de biberones cuando eventos cambia
  useEffect(() => {

    if (eventos.length === 0) return; // Si no hay eventos no ghace nada

    dispatch(resetBiberon());
    dispatch(resetPanal());

    eventos.forEach((evento) => {
      let fechaEvt = new Date(evento.fecha);

      if (
        evento.idCategoria == 35 &&
        fechaEvt >= fechaMinima &&
        fechaEvt <= fechaMaxima
      ) {
        dispatch(incrementarBiberon());
        if (fechaEvt > fechaUltimoBiberon) {
          fechaUltimoBiberon = fechaEvt;
        }
        settiempoTranscurridoBiberon(diferenciaTiempo(fechaUltimoBiberon));
      }
      if (ctdBiberonesDia == 0) {
        settiempoTranscurridoBiberon(0 + ":" + 0 + ":" + 0 + ":" + 0);
      }

      if (
        evento.idCategoria == 33 &&
        fechaEvt >= fechaMinima &&
        fechaEvt <= fechaMaxima
      ) {
        dispatch(incrementarPanal());
        if (fechaEvt > fechaUltimoPanal) {
          fechaUltimoPanal = fechaEvt;
        }
        settiempoTranscurridoPanal(diferenciaTiempo(fechaUltimoPanal));
      }
      if (ctdPanalesDia == 0) {
        settiempoTranscurridoPanal(0 + ":" + 0 + ":" + 0 + ":" + 0);
      }
    });
  }, [eventos, fechaMinima, fechaMaxima]);

  const diferenciaTiempo = (ultimaFecha) => {
    const diferenciaMs = new Date() - ultimaFecha;

    const segundosTotales = Math.floor(diferenciaMs / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);

    const segundos = segundosTotales % 60;
    const minutos = minutosTotales % 60;
    const horas = horasTotales % 24;
    const dias = diasTotales;

    return dias + ":" + horas + ":" + minutos + ":" + segundos;
  };

  return (
    <div className="container my-2">
      <h2 className="text-center mb-4">INFORME EVENTOS</h2>
      <div className="d-flex col-12 justify-content-center">
        <div id="biberonesCard" className="card mb-3 col-6 m-1">
          <div className="card-header">
            <h3 className="card-title text-center">Biberones</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Total de Biberones del Día: </strong>
              <span id="totalBiberones">{ctdBiberonesDia}</span>
            </p>
            <p className="card-text">
              <strong>Tiempo Transcurrido desde el Último Biberón: </strong>
              <span id="tiempoBiberon">
                {tiempoTranscurridoBiberon
                  ? tiempoTranscurridoBiberon
                  : "Nunca"}
              </span>
            </p>
            <p className="card-text">
              <strong>Ultima Actualizacion: </strong>
              <span id="tiempoBiberon">
                {ultimaActualizacionBiberon
                  ? ultimaActualizacionBiberon.toLocaleString()
                  : "Nunca"}
              </span>
            </p>
          </div>
        </div>
        <div id="panalesCard" className="card mb-3 col-6 m-1">
          <div className="card-header">
            <h3 className="card-title text-center">Pañales</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Total de Pañales del Día: </strong>
              <span id="totalPanales">{ctdPanalesDia}</span>
            </p>
            <p className="card-text">
              <strong>Tiempo Transcurrido desde el Último Cambio: </strong>
              <span id="tiempoPanales">
                {tiempoTranscurridoPanal ? tiempoTranscurridoPanal : "Nunca"}
              </span>
            </p>
            <p className="card-text">
              <strong>Ultima Actualizacion: </strong>
              <span id="tiempoBiberon">
                {ultimaActualizacionPanales
                  ? ultimaActualizacionPanales.toLocaleString()
                  : "Nunca"}
              </span>
            </p>
          </div>
          {/* <div className="card-footer">
            <button
              id="panalesBtn"
              className="btn btn-warning w-100"
              onClick={actualizarPanales}>
              ACTUALIZAR
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InformeEventos;
