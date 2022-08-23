import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'darkMode',
    initialState: false,
    reducers: {
        toggleDarkMode: (state, action) => {
            return !state;
        }
    }
}

export const darkModeSlice = createSlice(options);

//Selectors
export const selectDarkMode = (state) => state.darkMode;

//Exports
export const {
    toggleDarkMode
} = darkModeSlice.actions;

export default darkModeSlice.reducer;