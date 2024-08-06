import { useId, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const idUser = useId();
    const idPass = useId();

    const userCampo = useRef(null);
    const passCampo = useRef(null);

    const navigate = useNavigate();

    const ingresar = () => {
        const user = userCampo.current.value;
        const pass = passCampo.current.value;
        console.log(user, pass);

        if(user === "a" && pass === "a"){
            localStorage.setItem("user",user);
            navigate("/clima");
        }else{
            toast.error("Usuario y/o contrasena incorrectos");
        }
    }

  return (
    <div>
        <h2>Login</h2>
        <label htmlFor={idUser}>User</label>
        <input type="text" id={idUser} ref={userCampo} /><br/>
        <label htmlFor={idPass}>Pass</label>
        <input type="text" id={idPass} ref={passCampo}/><br/>
        <input type="button" value="Ingresar" onClick={ingresar} />
        <br />
        <Link to="/clima">Ir a clima</Link>
    </div>
  )
}

export default Login