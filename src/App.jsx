
import './App.css'
import Navbar from "./components/Navbar";      // <== IMPORT
import HomePage from "./pages/HomePage";       // <== IMPORT
import AboutPage from "./pages/AboutPage";     // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage";   // <== IMPORT
import ErrorPage from "./pages/ErrorPage";         // <== IMPORT

//ROUTE
import { Routes, Route } from "react-router-dom";  // <== IMPORT

//LOGGEDIN STATE
import HomePageWithNavigate from "./pages/HomePageWithNavigate";  // <== IMPORT 

import projectsData from "./projects-data.json";    // <== IMPORT
 
function App() {
  return (
    <div className="App">
      <Navbar />
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        {/* <Route path="/" element={<HomePage />} />  */}
        <Route  path="/" element={<HomePageWithNavigate />} />   {/* <== LOGGEDIN */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        
        <Route path="*" element={ <ErrorPage /> } />   {/*  <== ADD */}  
      </Routes>
    </div>
  );
}
 
export default App;
