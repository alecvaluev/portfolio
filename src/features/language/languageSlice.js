import { createSlice } from '@reduxjs/toolkit';
import { selectCurrentCode } from '../langCode/langCodeSlice';
//import languages
import en from "../../data/en.json";
import ko from "../../data/ko.json";
import sp from "../../data/sp.json";
import fr from "../../data/fr.json";
import zh from "../../data/zh.json";
import en_prj from '../../data/en_projects';
import ko_prj from '../../data/ko_projects';
import sp_prj from '../../data/sp_projects';
import fr_prj from '../../data/fr_projects';
import zh_prj from '../../data/zh_projects';

const options = {
    name: 'language',
    initialState: {},
    reducers: {
        initializeLanguages : (state, action) => {
            return {
                en: en,
                sp: sp,
                ko: ko,
                fr: fr,
                zh: zh,
                en_prj: en_prj,
                sp_prj: sp_prj,
                ko_prj: ko_prj,
                fr_prj: fr_prj,
                zh_prj: zh_prj
            }
        },
    }
}

export const languageSlice = createSlice(options);

//Selectors
export const selectLanguages = (state) => state.language;
export const selectLangCodes = (state) => Object.keys(state.language).filter(code => !code.includes('_prj'));
export const selectLanguage = (state) => {
    const langCode = selectCurrentCode(state);
    return state.language[langCode]; 
}
export const selectProjectsLang = (state) => {
    const langCode = selectCurrentCode(state);
    const projects = langCode + '_prj';
    return state.language[projects];
}

//Exports
export const {
    initializeLanguages,
} = languageSlice.actions;

export default languageSlice.reducer;