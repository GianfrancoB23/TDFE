import "./estilos.css";
import "./bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {store} from "./store/store";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";

import Contenedor from "./componentes/Contenedor";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import NoEncontrado from "./componentes/NoEncontrado";
import Dashboard from "./componentes/Dashboard";
import TiempoRestante from "./componentes/DashboardComp/TiempoRestante";

function App() {
  const logueado = localStorage.getItem("apiKey") ? true : false;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contenedor />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
