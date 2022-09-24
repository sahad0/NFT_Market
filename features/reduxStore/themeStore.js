import { createSlice } from "@reduxjs/toolkit";


const val = { theme: "dark" }


const themeSlice = createSlice({
    name: "theme",
    initialState: { value: val },
    reducers: {
        themeController: (state, action) => {
            state.value.theme === "dark" ? state.value.theme = "light" : state.value.theme = "dark";
        }
    }
})

export const { themeController } = themeSlice.actions;

export default themeSlice.reducer;



