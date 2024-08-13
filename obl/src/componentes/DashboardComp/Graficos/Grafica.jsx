import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const Grafica = ({ eventos, cats, titleGraph, detalle }) => {
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
    return (
      <div className="col-sm-4">
        <h2>PLACEHOLDER</h2>
        <Bar
          options={options}
          data={{
            labels: [
              "Día 1",
              "Día 2",
              "Día 3",
              "Día 4",
              "Día 5",
              "Día 6",
              "Día 7",
            ],
            datasets: [
              {
                label: detalle,
                data: [4, 5, 6, 7, 3, 4, 5],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    );
  };
  
  export default Grafica;
  