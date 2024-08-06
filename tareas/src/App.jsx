import Contenido from './componentes/componentes v1/Contenido'
import Titulo from './componentes/componentes v1/Titulo'
import './bootstrap.min.css'
import './estilos.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Contador from './componentes/componentes v1/Contador'
import Botones from './componentes/componentes v1/Botones'
import Login from './componentes/Login'
import Clima from './componentes/Clima'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenedor from './componentes/Contenedor'
import NoEncontrado from './componentes/NoEncontrado'
import Lista from './componentes/Lista'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contenedor/>}>
            <Route path="/" element={<Login />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="*" element={<NoEncontrado/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App

/* function App() {

  return (
    <Provider store={store}>
      <Titulo />
      <hr />
      <Contador />
      <Botones />
      <hr />
      <Contenido />
    </Provider>
  )
}

export default App */
