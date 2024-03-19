// src/pages/ProjectDetailsPage.jsx

import { useParams, Link } from 'react-router-dom';

function ProjectDetailsPage(props) {
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.
  const foundProject = props.projects.find((oneProject) => {     //  <== R-ADV
    return oneProject._id === projectId;
  });

  return (
    <div>
      <h1>Project Details</h1>

      {/* <== R-ADV  */}
      {!foundProject && <h3>Project not found!</h3>} 
 
      {foundProject && (                             
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
