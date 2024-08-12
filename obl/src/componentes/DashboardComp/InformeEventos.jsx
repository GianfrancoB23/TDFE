import React, { useId, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { guardarEventos, incrementarBiberon, resetBiberon } from "../../features/eventosSlice";

const InformeEventos = () => {

    const dispatch = useDispatch();
    const urlAPI = "https://babytracker.develotion.com/";

    const eventos = useSelector((state) => state.eventos.eventos);
    const ctdBiberonesDia = useSelector((state) => state.eventos.ctdBiberones);
    let fechaMinima = new Date();
    let fechaMaxima = new Date();
    fechaMinima.setHours(0,0,0,0);
    fechaMaxima.setHours(23,59,59,59);

    const [ultimaActualizacionBiberon, setUltimaActualizacionBiberon] = useState(null);
    const [ultimaActualizacionPanales, setUltimaActualizacionPanales] = useState(null);

    // Función para actualizar eventos
    const actualizarBiberon = () => {
        console.log("Biberon actualizado");
        setUltimaActualizacionBiberon(new Date())

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
                console.log(datos.eventos);

            });
    };

    // Calcula los conteos de biberones cuando eventos cambia
    useEffect(() => {
        if (eventos.length === 0) return; // Si no hay eventos no ghace nada

        dispatch(resetBiberon());

        eventos.forEach(evento => {
            let fechaEvt = new Date(evento.fecha);

            if (evento.idCategoria === 35 && fechaEvt >= fechaMinima && fechaEvt <= fechaMaxima) {
                console.log("Evento con categoría 35 encontrado:", evento.id, evento.fecha);
                dispatch(incrementarBiberon())
            }
        });
        
        console.log("Cantidad de biberones del día:", ctdBiberonesDia);
    }, [eventos, fechaMinima, fechaMaxima]);

    const actualizarPanales = () => {
        console.log("Panales actualizado");

    }

    return (
        <div className="container my-2">
            <h2 className="text-center mb-4">INFORME EVENTOS</h2>
            <div className="d-flex col-12 justify-content-center">
                <div id="biberonesCard" className="card mb-3 col-6 m-1">
                    <div className="card-header">
                        <h3 className="card-title">Biberones</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Total de Biberones del Día: </strong>
                            <span id="totalBiberones">{ctdBiberonesDia}</span>
                        </p>
                        <p className="card-text">
                            <strong>Tiempo Transcurrido desde el Último Biberón: </strong>
                            <span id="tiempoBiberon">00:00:00</span>
                        </p>
                        <p className="card-text">
                            <strong>Ultima Actualizacion: </strong>
                            <span id="tiempoBiberon">{ultimaActualizacionBiberon ? ultimaActualizacionBiberon.toLocaleString() : 'Nunca'}</span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button id="biberonesBtn"
                            className="btn btn-primary w-100"
                            onClick={actualizarBiberon}>
                            ACTUALIZAR
                        </button>
                    </div>
                </div>
                <div id="panalesCard" className="card mb-3 col-6 m-1">
                    <div className="card-header">
                        <h3 className="card-title">Pañales</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            <strong>Total de Pañales del Día: </strong>
                            <span id="totalPanales">0</span>
                        </p>
                        <p className="card-text">
                            <strong>Tiempo Transcurrido desde el Último Cambio: </strong>
                            <span id="tiempoPanales">00:00:00</span>
                        </p>
                        <p className="card-text">
                            <strong>Ultima Actualizacion: </strong>
                            <span id="tiempoBiberon">{ultimaActualizacionPanales ? ultimaActualizacionPanales.toLocaleString() : 'Nunca'}</span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button id="panalesBtn"
                            className="btn btn-warning w-100"
                            onClick={actualizarPanales}>
                            ACTUALIZAR
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InformeEventos