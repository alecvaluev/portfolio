import { createSlice } from '@reduxjs/toolkit';
import { selectProjectsLang } from '../language/languageSlice';
//import project data
import projects from '../../data/projects';
import projectEmptyTemplate from '../../data/constants';

const options = {
    name: 'projects',
    initialState: [],
    reducers: {
        initializeProjects : (state, action) => {
            return projects;
        },
    }
}

export const projectsSlice = createSlice(options);

//Selectors
export const selectRowProjects = (state) => state.projects;
export const selectProjects = (state) => {
    const projectLanguage = selectProjectsLang(state);
    
    const prjCopy = JSON.parse(JSON.stringify(state.projects));

    return prjCopy.map(prj => { 
        const language = projectLanguage.find(lang => prj.prj_id === lang.prj_id);
        if (!language) 
            {
            for(let key of Object.keys(projectEmptyTemplate)){
            prj[key] = language[key];
            }
        else{
            for(let key of Object.keys(language)){
            prj[key] = language[key];
            }
        }
        return prj;
    })
};

//Exports
export const {
    initializeProjects,
} = projectsSlice.actions;

export default projectsSlice.reducer;
