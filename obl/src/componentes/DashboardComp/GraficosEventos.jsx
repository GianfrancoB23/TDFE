import {useEffect} from "react";
import {eliminarEvento} from "../../features/eventosSlice";
import Grafica from "./Graficos/Grafica";

const GraficosEventos = ({eventos, cats}) => {
  /* console.log(eventos);
  console.log(cats); */
  let eventXCat = [];
  let weeklyFood = [
    {dia: 0, contador: 0},
    {dia: 1, contador: 0},
    {dia: 2, contador: 0},
    {dia: 3, contador: 0},
    {dia: 4, contador: 0},
    {dia: 5, contador: 0},
    {dia: 6, contador: 0},
  ];
  useEffect(() => {
    eventos.forEach((evento) => {
      if (eventXCat.length == 0) {
        eventXCat.push({idCategoria: evento.idCategoria, contador: 1});
      } else {
        let encontrado = false;
        for (let index = 0; index < eventXCat.length; index++) {
          const element = eventXCat[index];
          if (evento.idCategoria == element.idCategoria) {
            encontrado = true;
            element.contador++;
          }
        }
        if (!encontrado) {
          eventXCat.push({idCategoria: evento.idCategoria, contador: 1});
        }
      }
      let today = new Date();
      let limite = new Date();
      limite.setDate(limite.getDate() - 7);
      let fecha = new Date(evento.fecha);
      if (fecha >= limite && fecha <= today && evento.idCategoria == 31) {
        for (let index = 0; index < weeklyFood.length; index++) {
          const element = weeklyFood[index];

          if (fecha.getDay() == element.dia) {
            element.contador++;
          }
        }
      }
    });

    /* console.log(eventXCat);
    console.log(weeklyFood); */
  }, [eventos]);

  return (
    <div className="container justify-content-center align-items-center text-center">
      <h2>Analisis</h2>
      <div className="row">
        <Grafica
          cats={cats}
          datos={eventXCat}
          titleGraph="Eventos por categoria"
          detalle="Cantidad eventos"
          tipo="cat"
          key={Math.random()}
        />
        <Grafica
          cats={cats}
          datos={weeklyFood}
          titleGraph="Alimentos en ultimos 7 días"
          detalle="Veces alimentado"
          tipo="food"
          key={Math.random()}
        />
      </div>
    </div>
  );
};

export default GraficosEventos;
