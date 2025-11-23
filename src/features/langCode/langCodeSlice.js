import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LANG_CODE } from '../../data/constants';

// Load language code from localStorage or use default
const loadLangCode = () => {
    try {
        const savedLangCode = localStorage.getItem('langCode');
        return savedLangCode || DEFAULT_LANG_CODE;
    } catch (error) {
        return DEFAULT_LANG_CODE;
    }
};

const options = {
    name: 'langCode',
    initialState: loadLangCode(),
    reducers: {
        setLangCode: (state, action) => {
            localStorage.setItem('langCode', action.payload);
            return action.payload;
        }
    }
}

export const langCodeSlice = createSlice(options);

//Selectors
export const selectCurrentCode = (state) => state.langCode;

//Exports
export const {
    setLangCode
} = langCodeSlice.actions;

export default langCodeSlice.reducer;