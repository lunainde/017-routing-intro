
import './App.css'
import Navbar from "./components/Navbar";      
import HomePage from "./pages/HomePage";       
import AboutPage from "./pages/AboutPage";     
import ProjectsPage from "./pages/ProjectsPage";   
import ErrorPage from "./pages/ErrorPage";         

//ROUTE
import { Routes, Route } from "react-router-dom";  

//LOGGEDIN STATE
import HomePageWithNavigate from "./pages/HomePageWithNavigate";  

import projectsData from "./projects-data.json";    
 
//ROUTER ADV
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import QueryStringExample from './pages/QueryStringExample'; 

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
        
        {/*  ROUTER ADV  */}
        <Route path="/projects/:projectId" element={<ProjectDetailsPage projects={projectsData} />} />

        {/* QUERY  */}
        <Route path="/example" element={<QueryStringExample />} />

        <Route path="*" element={ <ErrorPage /> } />   {/*  <== ADD */}  
      </Routes>
    </div>
  );
}
 
export default App;
