import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {useState} from "react";
import {useEffect} from "react";
import {Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafica = ({cats, datos, titleGraph, detalle, tipo}) => {
  /* console.log(datos); */
  let diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleGraph,
      },
    },
  };
  const tipoDato = () => {
    if (tipo == "cat") {
      return datos.map((dato) =>
        cats.filter((cat) => cat.id == dato.idCategoria).map((cat) => cat.tipo)
      );
    } else {
      return datos.map((dato) => diaSemana[dato.dia]);
    }
  };
  useEffect(() => {
    setUserData({
      labels: tipoDato(),
      datasets: [
        {
          label: detalle,
          data: datos.map((dato) => dato.contador),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [datos]);

  const [userData, setUserData] = useState({
    labels: tipoDato(),
    datasets: [
      {
        label: detalle,
        data: datos.map((dato) => dato.contador),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  return (
    <div className="col-sm-4">
      {
        <Bar
          options={options}
          data={{
            labels: tipoDato(),
            datasets: [
              {
                label: detalle,
                data: datos.map((dato) => dato.contador),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      }
    </div>
  );
};

export default Grafica;
