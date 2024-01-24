import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme.Slice";

const store = configureStore({
    reducer: {
        themeMode:  themeSlice
    }
})

export default store