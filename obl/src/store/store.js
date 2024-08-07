import {configureStore} from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
        contador: contadorReducer,
        tareas: tareasReducer,
        pronostico : pronosticoReducer
    }
})

