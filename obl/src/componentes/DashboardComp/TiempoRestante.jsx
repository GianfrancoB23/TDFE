import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    guardarEventos,
} from "../../features/eventosSlice";

const TiempoRestante = () => {
    const dispatch = useDispatch();

    const [tiempoProximoBiberon, setTiempoProximoBiberon] = useState("");

    //Sacar cuando pasamos a dash
    const eventos = useSelector((state) => state.eventos.eventos);
    const urlAPI = "https://babytracker.develotion.com/";
    useEffect(() => {
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
                console.log(datos);

            });
    }, [])

    useEffect(() => {

        if (eventos.length === 0) return; // Si no hay eventos no ghace nada

        let fechaUltimoBiberon = new Date(0);

        eventos.forEach((evento) => {
            let fechaEvt = new Date(evento.fecha);

            if (evento.idCategoria === 35 && fechaEvt > fechaUltimoBiberon) {
                fechaUltimoBiberon = fechaEvt;
            }
        });

        const calcularTiempoRestante = () => {
            const ahora = new Date();
            const proximoBiberon = new Date(fechaUltimoBiberon.getTime() + 14400000); // esta en milisegundos

            const diferenciaMs = proximoBiberon - ahora;

            if (diferenciaMs <= 0) {
                return `TIEMPO EXCEDIDO`;
            }

            const segundosTotales = Math.floor(diferenciaMs / 1000);
            const minutosTotales = Math.floor(segundosTotales / 60);
            const horasTotales = Math.floor(minutosTotales / 60);

            const segundos = segundosTotales % 60;
            const minutos = minutosTotales % 60;
            const horas = horasTotales % 24;

            return `${horas} horas ${minutos} minutos ${segundos} segundos`;
        };

        setTiempoProximoBiberon(calcularTiempoRestante());

        /* GENERADO POR CHATGPT  PARA ACTUALIZAR CADA SEGUNDO*/
        setInterval(() => {
            setTiempoProximoBiberon(calcularTiempoRestante());
        }, 1000); // Actualizar cada segundo
        /* FIN GENERADO POR CHATGPT */
    }, [eventos]);

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">TIEMPO RESTANTE PARA EL PRÓXIMO BIBERÓN:</div>
                <div className="card-body">
                    <h3 className={`alert ${tiempoProximoBiberon == "TIEMPO EXCEDIDO" ? 'alert-danger' : 'alert-success'}`}>
                        {tiempoProximoBiberon}
                    </h3>
                </div>
                <div className="card-footer text-muted">Actualización en tiempo real</div>
            </div>
        </div>

    )
}

export default TiempoRestante