import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { guardarEtiquetas, guardarMaximas, guardarMinimas } from '../features/pronosticoSlice';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pronóstico para Montevideo',
        },
    },
};

const Clima = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tempMaximas = useSelector(state => state.pronostico.maximas);
    const tempMinimas = useSelector(state => state.pronostico.minimas);
    const etiquetas = useSelector(state => state.pronostico.etiquetas);

    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/")
        } else {
            //axios
            fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.9033&longitude=-56.1882&daily=temperature_2m_max%2Ctemperature_2m_min&timezone=auto")
                .then(r => r.json())
                .then(datos => {
                    console.log(datos);
                    dispatch(guardarMaximas(datos.daily.temperature_2m_max))
                    dispatch(guardarMinimas(datos.daily.temperature_2m_min))
                    dispatch(guardarEtiquetas(datos.daily.time))
                })
        }
    }, [])

    return (
        <>
            <div className='col'>
                <h2>Clima</h2>
                <p>Clima</p>
                <Link to="/">Ir a login</Link>
            </div>
            <div className='col'>
                <Bar options={options} data={{
                    labels: etiquetas,
                    datasets: [
                        {
                            label: 'Máximas',
                            data: tempMaximas,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'Minimas',
                            data: tempMinimas,
                            backgroundColor: 'rgba(200, 99, 200, 0.5)',
                        }
                    ],
                }} />
            </div>
        </>
    )
}

export default Clima