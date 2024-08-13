import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  eventos: [],
  ctdBiberones: 0,
  ctdPanales: 0,
};

export const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  reducers: {
    guardarEventos: (state, action) => {
      //immer
      state.eventos = action.payload;
    },
    guardarEvento: (state, action) => {
      //immer
      state.eventos.push(action.payload);
    },
    incrementarBiberon: (state) => {
      //immer
      ++state.ctdBiberones;
    },
    resetBiberon: (state) => {
      //immer
      state.ctdBiberones = 0;
    },
    incrementarPanal: (state) => {
      //immer
      ++state.ctdPanales;
    },
    resetPanal: (state) => {
      //immer
      state.ctdPanales = 0;
    },
    guardarUltimaFecha: (state, action) => {
      state.lastUpd = action.payload;
    },
    eliminarEvento: (state, action) => {
      state.eventos = state.eventos.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  guardarEventos,
  incrementarBiberon,
  resetBiberon,
  guardarEvento,
  incrementarPanal,
  resetPanal,
  guardarUltimaFecha,
  eliminarEvento,
} = eventosSlice.actions;
export default eventosSlice.reducer;
