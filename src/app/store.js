import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../features/darkMode/darkModeSlice';
import languageReducer from '../features/language/languageSlice';
import langCodeReducer from '../features/langCode/langCodeSlice';
import projectsReducer from '../features/projects/projectsSlice';
import workExperienceReducer from '../features/workExperience/workExperienceSlice';

export default configureStore({
    reducer: {
        langCode: langCodeReducer,
        language: languageReducer,
        projects: projectsReducer,
        workExperience: workExperienceReducer,
        darkMode: darkModeReducer
    }
})