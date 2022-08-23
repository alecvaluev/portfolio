import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LANG_CODE } from '../../data/constants';

const options = {
    name: 'langCode',
    initialState: DEFAULT_LANG_CODE,
    reducers: {
        setLangCode: (state, action) => {
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