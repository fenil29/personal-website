import React from "react";

import "./Projects.css";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects main-container">
      <h1>Projects I've Built</h1>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
