import './estilos.css'
import './bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Contenedor from './componentes/Contenedor'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import NoEncontrado from './componentes/NoEncontrado'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contenedor />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="*" element={<NoEncontrado/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
