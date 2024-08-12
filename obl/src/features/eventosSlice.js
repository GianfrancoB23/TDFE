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
    incrementarBiberon: (state) => {
      //immer
      state.ctdBiberones++;
    },
    resetBiberon: (state) => {
      //immer
      state.ctdBiberones = 0;
    },
    incrementarPanal: (state) => {
      //immer
      state.ctdPanales++;
    },
    resetPanal: (state) => {
      //immer
      state.ctdPanales = 0;
    },
    guardarEvento: (state, action) => {
      //immer
      state.eventos.push(action.payload);
    },
    guardarUltimaFecha: (state, action) => {
      state.lastUpd = action.payload;
    }
  },
});

export const {guardarEventos, incrementarBiberon, resetBiberon, guardarEvento, incrementarPanal, resetPanal, guardarUltimaFecha} =
  eventosSlice.actions;
export default eventosSlice.reducer;
