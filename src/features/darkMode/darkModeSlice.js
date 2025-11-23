import { createSlice } from '@reduxjs/toolkit';

// Helper function to detect system preference
const getSystemPreference = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
};

// Load dark mode from localStorage or default to 'auto'
const loadDarkMode = () => {
    try {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            // Handle legacy boolean values
            if (savedMode === 'true' || savedMode === 'false') {
                return savedMode === 'true' ? 'dark' : 'light';
            }
            return savedMode;
        }
        return 'auto';
    } catch (error) {
        return 'auto';
    }
};

// Get the actual dark mode state (resolving 'auto' to system preference)
const getActualDarkMode = (mode) => {
    if (mode === 'auto') {
        return getSystemPreference();
    }
    return mode === 'dark';
};

const options = {
    name: 'darkMode',
    initialState: {
        mode: loadDarkMode(), // 'light', 'dark', or 'auto'
        isDark: getActualDarkMode(loadDarkMode()) // computed actual state
    },
    reducers: {
        setDarkMode: (state, action) => {
            const newMode = action.payload; // 'light', 'dark', or 'auto'
            state.mode = newMode;
            state.isDark = getActualDarkMode(newMode);
            localStorage.setItem('darkMode', newMode);
        },
        toggleDarkMode: (state) => {
            // Cycle through: light -> dark -> auto -> light
            let newMode;
            if (state.mode === 'light') {
                newMode = 'dark';
            } else if (state.mode === 'dark') {
                newMode = 'auto';
            } else {
                newMode = 'light';
            }
            state.mode = newMode;
            state.isDark = getActualDarkMode(newMode);
            localStorage.setItem('darkMode', newMode);
        },
        updateSystemPreference: (state) => {
            // Update isDark when system preference changes (only if mode is 'auto')
            if (state.mode === 'auto') {
                state.isDark = getSystemPreference();
            }
        }
    }
}

export const darkModeSlice = createSlice(options);

//Selectors
export const selectDarkMode = (state) => state.darkMode.isDark;
export const selectDarkModeMode = (state) => state.darkMode.mode;

//Exports
export const {
    setDarkMode,
    toggleDarkMode,
    updateSystemPreference
} = darkModeSlice.actions;

export default darkModeSlice.reducer;