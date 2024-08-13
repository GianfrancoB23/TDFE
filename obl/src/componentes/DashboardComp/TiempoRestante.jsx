import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {guardarEventos} from "../../features/eventosSlice";

const TiempoRestante = ({eventos, ctdBiberonesDia}) => {
  const dispatch = useDispatch();

  const [tiempoProximoBiberon, setTiempoProximoBiberon] = useState("");

  useEffect(() => {

    if (eventos.length == 0){
      setTiempoProximoBiberon("Sin registros")
      return; // Si no hay eventos no ghace nada
    } 
      

    let fechaUltimoBiberon = new Date(0);

    eventos.forEach((evento) => {
      let fechaEvt = new Date(evento.fecha);

      if (evento.idCategoria == 35 && fechaEvt > fechaUltimoBiberon) {
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

    //setInterval es una funcion que le pasas 2 parametros
    //primero lo que queres que ejecute
    //segundo el intervalo de tiempo en milisegundos cada cuanto queres que se ejecute

    const intervalId = setInterval(() => {
      setTiempoProximoBiberon(calcularTiempoRestante());
    }, 1000); // Actualizar cada segundo

    // Limpia el intervalo al desmontar o al cambiar la dependencia
    return () => clearInterval(intervalId);

    /* FIN GENERADO POR CHATGPT */
  }, [eventos,ctdBiberonesDia]);

  return (
    <div className="container mt-0 pt-4 bg-light mb-0">
      <div className="card text-center">
        <div className="card-header bg-dark text-white">
          TIEMPO RESTANTE PARA EL PRÓXIMO BIBERÓN:
        </div>
        <div className="card-body">
          <h3
            className={`alert ${
              tiempoProximoBiberon == "TIEMPO EXCEDIDO"
                ? "alert-danger"
                : "alert-success"
            }`}>
            {tiempoProximoBiberon}
          </h3>
        </div>
        <div className="card-footer text-muted">
          Actualización en tiempo real
        </div>
      </div>
    </div>
  );
};

export default TiempoRestante;
