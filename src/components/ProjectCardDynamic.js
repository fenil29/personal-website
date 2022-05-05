import React, { useState } from "react"
import { Button } from "antd"
import { AiOutlineLink } from "react-icons/ai"
import { FaGithub } from "react-icons/fa"
import Image from "./image"
function ProjectCardDynamic(props) {
  return (
    <div className="project-dynamic-route">
      <div className="project-details-modal-content">
        <div className="project-img">
          <Image type={"details-image"} filename={props.imgName} />
        </div>
        <div className="content-container">
          <div className="title">
            <h1>{props.title}</h1>
            <h3 className="project-type">{props.type}</h3>
          </div>
          <hr />
          <div className="project-details-content">
            <div className="project-description">{props.descriptionLong}</div>
            <br />
            <div>Technology Used:</div>
            <div className="project-technology-container">
              {props.technologyUsed.map((tech, index) => (
                <div className="project-technology-card" key={index}>
                  <img className="img" src={tech.img} alt="react" />
                  <div>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "65px" }}></div>
          <div className="project-details-button-container">
            {props.button.viewCodeUrl && (
              <div className="project-button">
                <a
                  href={props.button.viewCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    icon={
                      <FaGithub
                        style={{ marginRight: "5px" }}
                        className="icon"
                      />
                    }
                  >
                    View Code
                  </Button>
                </a>
              </div>
            )}
            {props.button.viewProjectUrl && (
              <div className="project-button">
                <a
                  href={props.button.viewProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    icon={
                      <AiOutlineLink
                        style={{ marginRight: "5px" }}
                        className="icon"
                      />
                    }
                  >
                    View Project
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardDynamic
