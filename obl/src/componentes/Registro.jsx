import React, { useId, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

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

    const ingresar = () => {
        const userCampoReg = userCampoReg.current.value;
        const passCampoReg = passCampoReg.current.value;
        const slcDptoCampo = slcDptoCampo.current.value;
        const slcCityCampo = slcCityCampo.current.value;

        console.log(userReg, passCampoReg, slcDptoCampo, slcCityCampo);

        if (user === "a" && pass === "a") {
            localStorage.setItem("user", user);
            navigate("/clima");
        } else {
            toast.error("Usuario y/o contrasena incorrectos");
        }
    }

    const registrar = () => {
        const userCampoReg = userCampoReg.current.value;
        const passCampoReg = passCampoReg.current.value;
        const slcDptoCampo = slcDptoCampo.current.value;
        const slcCityCampo = slcCityCampo.current.value;

        console.log(userReg, passCampoReg, slcDptoCampo, slcCityCampo);

        
    }

    return (
        <div>
            <h2>Registro en la Aplicación</h2>
            <label htmlFor={idUserReg}>Usuario</label>
            <input type="text" className="form-control" id={idUserReg} placeholder="Ingrese su usuario" ref={userCampoReg}/>

            <label htmlFor={idPassReg}>Contraseña</label>
            <input type="password" className="form-control" id={idPassReg} placeholder="Ingrese su contraseña" ref={passCampoReg}/>

            <label htmlFor={idSlcDpto}>Departamento</label>
            <select className="form-control" id={idSlcDpto} ref={slcDptoCampo}>
                {/* OPCIONES */}
            </select>

            <label htmlFor={idSlcCity}>Ciudad</label>
            <select className="form-control" id={idSlcCity} ref={slcCityCampo}>
                {/* OPCIONES */}
            </select>
            
            <input type="button" value="REGISTRAR" onClick={registrar} className='mt-2'/>
        </div>

    )
}

export default Registro