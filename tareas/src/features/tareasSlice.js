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
            state.tareas = action.payload;
        },
        guardarTarea: (state,action) => {
            state.tareas.push(action.payload);
        }
    }
})

export const { guardarTareas, guardarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;