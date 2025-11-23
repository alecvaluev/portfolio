import { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { initializeLanguages } from "./features/language/languageSlice";
import { initializeProjects } from "./features/projects/projectsSlice";
import { initializeWorkExperience } from "./features/workExperience/workExperienceSlice";
import { selectDarkMode, updateSystemPreference } from "./features/darkMode/darkModeSlice";

const Page = lazy(() => import("./components/Page"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-slate-700 rounded-full"></div>
      <div className="w-20 h-20 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin absolute top-0 left-0"></div>
    </div>
  </div>
);

export default function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const headerOpen = !(window.innerWidth < 768);

  useEffect(() => {
    dispatch(initializeProjects());
    dispatch(initializeLanguages());
    dispatch(initializeWorkExperience());
    // Initialize system preference on mount (in case mode is 'auto')
    dispatch(updateSystemPreference());
  }, [dispatch])

  // Listen for system preference changes and apply dark-mode class
  useEffect(() => {
    // Apply dark-mode class to html element for scrollbar styles
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      dispatch(updateSystemPreference());
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [darkMode, dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Page headerOpen={headerOpen}/>
      </Suspense>
    </div>
  );
}
