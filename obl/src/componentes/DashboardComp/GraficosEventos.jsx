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

const GraficosEventos = ({ eventos, cats}) => {
  return (
    <div>
      <h2>Placeholder</h2>
      <div className="row"></div>
    </div>
  );
};

export default GraficosEventos;
