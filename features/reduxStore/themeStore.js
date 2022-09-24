import { createSlice } from "@reduxjs/toolkit";


const val = {
    theme: "dark",
    primary_Color: "black",
    text_Color: "white",
    btn_Color: "black"
}


const themeSlice = createSlice({
    name: "theme",
    initialState: { value: val },
    reducers: {
        themeController: (state, action) => {
            state.value.theme === "dark" ? state.value.theme = "light" : state.value.theme = "dark";
            state.value.theme === "dark" ? state.value.primary_Color = "black" : state.value.primary_Color = "white";
            state.value.theme === "dark" ? state.value.text_Color = "white" : state.value.text_Color = "black";
            state.value.theme === "dark" ? state.value.btn_Color = "black" : state.value.btn_Color = "white";


        }
    }
})

export const { themeController } = themeSlice.actions;

export default themeSlice.reducer;



