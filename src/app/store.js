import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../features/darkMode/darkModeSlice';
import languageReducer from '../features/language/languageSlice';
import langCodeReducer from '../features/langCode/langCodeSlice';
import projectsReducer from '../features/projects/projectsSlice';

export default configureStore({
    reducer: {
        langCode: langCodeReducer,
        language: languageReducer,
        projects: projectsReducer,
        darkMode: darkModeReducer
    }
})