// src/pages/ProjectsPage.jsx

// import projectsData from "./../projects-data.json";

function ProjectsPage (props) {                      // <== UPDATE  
  return (
    <div>
      <h1>Projects</h1>
  {/* {projectsData.map((project) => {  */}
      {props.projects.map((project) => {             // <== UPDATE
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;