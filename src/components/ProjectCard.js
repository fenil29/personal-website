import React from "react";

import "./ProjectCard.css";

import projectImg from "../asserts/pro.jpg";

function ProjectCard() {
  return (
    <div className="project-card-container">
      {/* <img src={projectImg} alt="project" /> */}
      <div className="content">
        <h2>Appoint Meet</h2>
        <p>
          Appoint-Meet is a simple minimal application to manage all of your
          appointment scheduling process for business and individuals
        </p>
        <div className="button">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
