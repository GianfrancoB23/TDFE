import {configureStore} from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice";
import ciudadesReducer from "../features/ciudadesSlice";
import categoriasReducer from "../features/categoriasSlice";

export const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    departamentos: departamentosReducer,
    ciudades: ciudadesReducer,
  },
});
