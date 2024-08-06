import {configureStore} from "@reduxjs/toolkit"
import contadorReducer from "../features/contadorSlice"
import tareasReducer from "../features/tareasSlice"
import pronosticoReducer from "../features/pronosticoSlice"

export const store = configureStore({
    reducer: {
        contador: contadorReducer,
        tareas: tareasReducer,
        pronostico : pronosticoReducer
    }
})

