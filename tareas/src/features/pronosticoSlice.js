import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maximas: [],
    minimas: [],
    etiquetas: []
}

export const pronosticoSlice = createSlice({
    name: "pronostico",
    initialState,
    reducers: {
        guardarMaximas: (state, action) => {
            //immer 
            state.maximas = action.payload;
        },
        guardarMinimas: (state, action) => {
            //immer 
            state.minimas = action.payload;
        },
        guardarEtiquetas: (state, action) => {
            //immer 
            state.etiquetas = action.payload;
        }
    }
})

export const { guardarMaximas, guardarMinimas, guardarEtiquetas } = pronosticoSlice.actions;
export default pronosticoSlice.reducer;