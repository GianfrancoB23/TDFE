import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  eventos: [],
};

export const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  reducers: {
    guardarEventos: (state, action) => {
      //immer
      state.eventos = action.payload;
    },
  },
});

export const {guardarEventos} = eventosSlice.actions;
export default eventosSlice.reducer;
