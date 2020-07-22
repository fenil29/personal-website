import React from "react";

import "./Projects.css";

import ProjectCard from "./ProjectCard";

import nodejsSvg from "../asserts/nodejs.svg";
import reactSvg from "../asserts/react.svg";
import postgresqlSvg from "../asserts/postgresql.svg";
import expressSvg from "../asserts/express.svg";
import jwtSvg from "../asserts/jwt.svg";

let projects=[
  {
    title:"Appoint Meet",
    type:"Web Application",
    imgName:"appoint-meet.png",
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort :"Appoint-Meet is a simple minimal application to manage all appointment scheduling process for business and individuals",
    descriptionLong :"Appoint-Meet is a simple minimal application to manage all appointment scheduling process for business and individuals",
    button:{
      viewCodeUrl:"",
      viewProjectUrl:"https://appointmeet.netlify.app/"
    },
    technologyUsed:[
      {name:"ReactJs",img:reactSvg},
      {name:"NodeJs",img:nodejsSvg},
      {name:"ExpressJs",img:expressSvg},
      {name:"PostgreSQL",img:postgresqlSvg},
      {name:"JWT",img:jwtSvg},
    ]
  }
]

function Projects() {
  return (
    <div className="projects main-container">
      <h1 className="title">Projects I've Built</h1>
      <div className="projects-container">
        {projects.map(item=>(<ProjectCard {...item}/>))}
        
      </div>
    </div>
  );
}

export default Projects;
