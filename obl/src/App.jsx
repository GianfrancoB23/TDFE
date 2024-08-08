import './estilos.css'
import './bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'

import Contenedor from './componentes/Contenedor'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import NoEncontrado from './componentes/NoEncontrado'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contenedor />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
