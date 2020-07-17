import React from "react";

import "./Projects.css";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
