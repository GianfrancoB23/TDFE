import React from 'react'
/* import '../bootstrap.min.css' */

import { useId, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const idUserLogin = useId();
    const idPassLogin = useId();

    const userCampoLogin = useRef(null);
    const passCampoLogin = useRef(null);

    const navigate = useNavigate();

    const ingresar = () => {
        const user = userCampoLogin.current.value;
        const pass = passCampoLogin.current.value;
        console.log(user, pass);

        if (user === "a" && pass === "a") {
            localStorage.setItem("user", user);
            navigate("/clima");
        } else {
            toast.error("Usuario y/o contrasena incorrectos");
        }
    }

    return (
        <div className='justify-content-center align-items-center text-center'>
            <h1>LOGIN</h1>
            <label htmlFor={idUserLogin}>User: </label>
            <input type="text" id={idUserLogin} ref={userCampoLogin} /><br />
            <label htmlFor={idPassLogin}>Pass: </label>
            <input type="text" id={idPassLogin} ref={passCampoLogin} /><br />
            <input type="button" value="Ingresar" onClick={ingresar} className='mt-2'/>
            <br />
            <Link to="/Registrar">Ir a registrarse</Link>
        </div>
    )
}

export default Login

{/* 
<div className="container d-flex justify-content-center align-items-center vh-100">
<div className="card shadow-sm" style={{ width: "100%", maxWidth: 400 }}>
    <div className="card-body">
        <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
        <form>
            <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Ingrese su usuario"
                    required=""
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    required=""
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
                Iniciar Sesión
            </button>
        </form>
    </div>
</div>
</div> 
*/}