import { createSlice } from '@reduxjs/toolkit';
import { selectCurrentCode } from '../langCode/langCodeSlice';
//import work experience data
import workExperience from '../../data/workExperience';
//import work experience languages
import en_workExperience from '../../data/en_workExperience.json';
import sp_workExperience from '../../data/sp_workExperience.json';
import ko_workExperience from '../../data/ko_workExperience.json';
import fr_workExperience from '../../data/fr_workExperience.json';
import zh_workExperience from '../../data/zh_workExperience.json';

const workExperienceLanguages = {
    en: en_workExperience,
    sp: sp_workExperience,
    ko: ko_workExperience,
    fr: fr_workExperience,
    zh: zh_workExperience
};

const options = {
    name: 'workExperience',
    initialState: [],
    reducers: {
        initializeWorkExperience: (state, action) => {
            return workExperience;
        },
    }
}

export const workExperienceSlice = createSlice(options);

//Selectors
export const selectRowWorkExperience = (state) => state.workExperience;
export const selectWorkExperience = (state) => {
    const langCode = selectCurrentCode(state);
    const workExperienceLanguage = workExperienceLanguages[langCode] || workExperienceLanguages.en;
    
    const workExpCopy = JSON.parse(JSON.stringify(state.workExperience));

    return workExpCopy.map(work => { 
        const language = workExperienceLanguage.find(lang => work.id === lang.id);
        if (language) {
            // Merge the translated data with the base data
            return {
                ...work,
                company: language.company,
                location: language.location,
                period: language.period,
                responsibilities: language.responsibilities
            };
        }
        return work;
    });
};

//Exports
export const {
    initializeWorkExperience,
} = workExperienceSlice.actions;

export default workExperienceSlice.reducer;