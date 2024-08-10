import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categorias: [],
};

export const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    guardarCategorias: (state, action) => {
      //immer
      state.categorias = action.payload;
    },
  },
});

export const {guardarCategorias} = categoriasSlice.actions;
export default categoriasSlice.reducer;
