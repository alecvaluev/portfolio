import { useEffect } from 'react'
import Page from "./components/Page";
import { useDispatch } from "react-redux";
import { initializeLanguages } from "./features/language/languageSlice";
import { initializeProjects } from "./features/projects/projectsSlice";

export default function App() {
  const dispatch = useDispatch();
  const headerOpen = !(window.innerWidth < 500);

  useEffect(() => {
    dispatch(initializeProjects());
    dispatch(initializeLanguages());
  }, [])

  return (
    <div className="App">
      <Page headerOpen={headerOpen}/>
    </div>
  );
}
