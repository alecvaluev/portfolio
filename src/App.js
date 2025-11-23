import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from "react-redux";
import { initializeLanguages } from "./features/language/languageSlice";
import { initializeProjects } from "./features/projects/projectsSlice";
import { initializeWorkExperience } from "./features/workExperience/workExperienceSlice";

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
  const headerOpen = !(window.innerWidth < 768);

  useEffect(() => {
    dispatch(initializeProjects());
    dispatch(initializeLanguages());
    dispatch(initializeWorkExperience());
  }, [dispatch])

  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Page headerOpen={headerOpen}/>
      </Suspense>
    </div>
  );
}
