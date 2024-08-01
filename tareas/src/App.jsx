import Contenido from './componentes/Contenido'
import Titulo from './componentes/Titulo'
import './estilos.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Contador from './componentes/Contador'
import Botones from './componentes/Botones'

function App() {

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

export default App
