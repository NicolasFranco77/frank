import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hola: "Hola mundillo de redux toolkit"
}

export const authSlice = createSlice({
name: "auth",
initialState,
reducers: {
    setHola: (state) => {
        state.hola = "Whaaaats"
    }
}

})


export const { setHola,  } = authSlice.actions

export default authSlice.reducer;