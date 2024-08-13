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
import {Atom} from "react-loading-indicators";
import {Suspense} from "react";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Atom size="big" style={{fontSize: "35px"}} />}>
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
      </Suspense>
      <ToastContainer />
    </Provider>
  );
}

export default App;
