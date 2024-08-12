import {configureStore} from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice";
import ciudadesReducer from "../features/ciudadesSlice";
import categoriasReducer from "../features/categoriasSlice";
import eventosReducer from "../features/eventosSlice";

export const store = configureStore({
  reducer: {
    eventos: eventosReducer,
    categorias: categoriasReducer,
    departamentos: departamentosReducer,
    ciudades: ciudadesReducer,
  },
});
