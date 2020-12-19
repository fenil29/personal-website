import React from "react"

import "./Projects.css"

import ProjectCard from "./ProjectCard"

import projects from "../project-detail/ProjectDetail"





function Projects(props) {
  return (
    <div className="projects main-container">
      {/* <h1 className="title">Projects I've Built</h1> */}
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projects.map((item, index) => (
          <ProjectCard {...item} key={index} projectname={props.projectname}/>
        ))}
      </div>
    </div>
  )
}

export default Projects
