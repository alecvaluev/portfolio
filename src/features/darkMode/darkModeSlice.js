import { createSlice } from '@reduxjs/toolkit';

// Load dark mode from localStorage or default to false
const loadDarkMode = () => {
    try {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    } catch (error) {
        return false;
    }
};

const options = {
    name: 'darkMode',
    initialState: loadDarkMode(),
    reducers: {
        toggleDarkMode: (state, action) => {
            const newState = !state;
            localStorage.setItem('darkMode', JSON.stringify(newState));
            return newState;
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