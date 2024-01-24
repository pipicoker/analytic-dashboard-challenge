import { createSlice } from '@reduxjs/toolkit'

interface themeState {
    theme: string

  }
  
export const themeSlice  = createSlice({
    name: "themeMode",
    initialState: {
        theme: "light"

    },

    reducers: {
      setTheme: (state, action) => {
        state.theme = action.payload;
      },
    
  },
  
})

export const {setTheme} = themeSlice.actions


export const selectTheme = (state: { themeMode: themeState }) => state.themeMode.theme;



export default themeSlice.reducer