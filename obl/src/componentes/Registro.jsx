import React, { useEffect, useId, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { guardarDepartamentos } from '../features/departamentosSlice';
import { guardarCiudades } from '../features/ciudadesSlice';


const Registro = () => {

    const idUserReg = useId();
    const idPassReg = useId();
    const idSlcDpto = useId();
    const idSlcCity = useId();

    const userCampoReg = useRef(null);
    const passCampoReg = useRef(null);
    const slcDptoCampo = useRef(null);
    const slcCityCampo = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const departamentos = useSelector(state => state.departamentos.departamentos)
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('');
    const ciudades = useSelector(state => state.ciudades.ciudades)

    let campo = useRef(null)


    useEffect(() => {
        fetch("https://babytracker.develotion.com/departamentos.php")
            .then(r => r.json())
            .then(datos => {
                console.log(datos);

                dispatch(guardarDepartamentos(datos.departamentos))
            })
    }, [])

    const cargarCity = (e) => {
        setDepartamentoSeleccionado(e.target.value);
    };

    useEffect(() => {
        if (departamentoSeleccionado) {
            fetch(`https://babytracker.develotion.com/ciudades.php?idDepartamento=${departamentoSeleccionado}`)
                .then(r => r.json())
                .then(datos => {
                    console.log("Ciudades", datos.ciudades);
                    dispatch(guardarCiudades(datos.ciudades));
                })
        }
    }, [departamentoSeleccionado, dispatch]);

    const registrar = () => {
        const userCampoReg = userCampoReg.current.value;
        const passCampoReg = passCampoReg.current.value;
        const slcDptoCampo = slcDptoCampo.current.value;
        const slcCityCampo = slcCityCampo.current.value;

        console.log(userReg, passCampoReg, slcDptoCampo, slcCityCampo);

        /*         if (user === "a" && pass === "a") {
                    localStorage.setItem("user", user);
                    navigate("/clima");
                } else {
                    toast.error("Usuario y/o contrasena incorrectos");
                } */
    }

    return (
        <div>
            <h2>REGISTRO EN LA APLICACIÓN</h2>
            <label htmlFor={idUserReg}>Usuario</label>
            <input type="text" className="form-control" id={idUserReg} placeholder="Ingrese su usuario" ref={userCampoReg} />

            <label htmlFor={idPassReg}>Contraseña</label>
            <input type="password" className="form-control" id={idPassReg} placeholder="Ingrese su contraseña" ref={passCampoReg} />

            <label htmlFor={idSlcDpto}>Departamento</label>
            <select className="form-control" id={idSlcDpto} ref={slcDptoCampo} onChange={cargarCity}>
                {departamentos.map(departamento => <option key={departamento.id} value={departamento.id} >{departamento.nombre}</option>)}
            </select>

            <label htmlFor={idSlcCity}>Ciudad</label>
            <select className="form-control" id={idSlcCity} ref={slcCityCampo}>
                {ciudades.map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>)}
            </select>

            <input type="button" value="REGISTRAR" onClick={registrar} className='mt-2' />
        </div>

    )
}

export default Registro