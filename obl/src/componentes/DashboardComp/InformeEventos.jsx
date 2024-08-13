import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    guardarEventos,
    incrementarBiberon,
    resetBiberon,
    incrementarPanal,
    resetPanal,
} from "../../features/eventosSlice";

const InformeEventos = ({ eventos, ctdBiberonesDia, ctdPanalesDia }) => {
    const dispatch = useDispatch();
/*     dispatch(resetBiberon());
    dispatch(resetPanal()); */

    const [ultimaActualizacionBiberon, setUltimaActualizacionBiberon] =
        useState(null);
    const [ultimaActualizacionPanales, setUltimaActualizacionPanales] =
        useState(null);
    const [tiempoTranscurridoBiberon, setTiempoTranscurridoBiberon] =
        useState("Nunca");
    const [tiempoTranscurridoPanal, setTiempoTranscurridoPanal] =
        useState("Nunca");

    let fechaMinima = new Date();
    let fechaMaxima = new Date();
    fechaMinima.setHours(0, 0, 0, 0);
    fechaMaxima.setHours(23, 59, 59, 59);

    // Calcula los conteos de biberones cuando eventos cambia
    useEffect(() => {
        if (eventos.length === 0) return; // Si no hay eventos no hace nada

        let fechaBase = new Date(0);
        let fechaUltimoBiberon = fechaBase;
        let fechaUltimoPanal = fechaBase;

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
            }
            if (ctdBiberonesDia === 0) {
                setTiempoTranscurridoBiberon("Nunca");
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
            }
            if (ctdPanalesDia === 0) {
                setTiempoTranscurridoPanal("Nunca");
            }
        });

        setUltimaActualizacionBiberon(fechaUltimoBiberon);
        setUltimaActualizacionPanales(fechaUltimoPanal);

        const calcularTiempoTranscurrido = () => {
            const ahora = new Date();

            const diferenciaTiempo = (ultimaFecha) => {
                const diferenciaMs = ahora - ultimaFecha;
                const segundosTotales = Math.floor(diferenciaMs / 1000);
                const minutosTotales = Math.floor(segundosTotales / 60);
                const horasTotales = Math.floor(minutosTotales / 60);
                const diasTotales = Math.floor(horasTotales / 24);

                const segundos = segundosTotales % 60;
                const minutos = minutosTotales % 60;
                const horas = horasTotales % 24;
                const dias = diasTotales;

                return `${dias} dias ${horas} hor ${minutos} min ${segundos} seg`;
            };

            //if (ultimaActualizacionBiberon) {
            setTiempoTranscurridoBiberon(
                diferenciaTiempo(ultimaActualizacionBiberon)
            );
            //}

            //if (ultimaActualizacionPanales) {
            setTiempoTranscurridoPanal(diferenciaTiempo(ultimaActualizacionPanales));
            // }

            if (ctdBiberonesDia === 0) {
                setTiempoTranscurridoBiberon("Nunca");
            }
            if (ctdPanalesDia === 0) {
                setTiempoTranscurridoPanal("Nunca");
            }
        };

        calcularTiempoTranscurrido(); // Calcular al montar el componente

        const intervalo = setInterval(calcularTiempoTranscurrido, 1000); // Actualizar cada segundo

        return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar el componente
    }, [eventos, ctdBiberonesDia, ctdPanalesDia]);

    return (
        <div className="container mt-0 pt-4  bg-light mb-0">
            <h2 className="text-center mb-4 text-center bg-info text-dark p-3">
                INFORME EVENTOS
            </h2>
            <div className="d-flex col-12 justify-content-center">
                <div id="biberonesCard" className="card mb-3 col-6 m-1">
                    <div className="card-header bg-dark text-white">
                        <h3 className="card-title text-center ">Biberones</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Total de Biberones del Día: </strong>
                            <span id="totalBiberones">{ctdBiberonesDia}</span>
                        </p>
                        <p className="card-text">
                            <strong>Último Biberón: </strong>
                            <span id="tiempoBiberon">{tiempoTranscurridoBiberon}</span>
                        </p>
                    </div>
                </div>
                <div id="panalesCard" className="card mb-3 col-6 m-1">
                    <div className="card-header bg-dark text-white">
                        <h3 className="card-title text-center">Pañales</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Total de Pañales del Día: </strong>
                            <span id="totalPanales">{ctdPanalesDia}</span>
                        </p>
                        <p className="card-text">
                            <strong>Último Cambio: </strong>
                            <span id="tiempoPanales">{tiempoTranscurridoPanal}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformeEventos;
