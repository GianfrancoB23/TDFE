import { configureStore } from '@reduxjs/toolkit';
import departamentosReducer from '../features/departamentosSlice';
import ciudadesReducer from '../features/ciudadesSlice';

export const store = configureStore({
    reducer: {
        departamentos: departamentosReducer,
        ciudades: ciudadesReducer
    },
});