import React, { useState } from 'react';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');

  const handleAddProject = () => {
    if (projectName.trim() === '') return;
    setProjects([...projects, { name: projectName }]);
    setProjectName('');
  };

  const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  return (
    <div>
      <h2>Project Manager</h2>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="New Project Name"
      />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.name}
            <button onClick={() => handleDeleteProject(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
