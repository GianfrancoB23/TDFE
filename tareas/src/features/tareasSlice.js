import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tareas: []
}

export const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        guardarTareas: (state, action) => {
            //immer 
            console.log(action);
        }
    }
})

export const { guardarTareas } = tareasSlice.actions;
export default tareasSlice.reducer;