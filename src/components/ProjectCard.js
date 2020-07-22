import React, { useState } from "react"

import "./ProjectCard.css"

import nodejsSvg from "../asserts/nodejs.svg"
import reactSvg from "../asserts/react.svg"
import postgresqlSvg from "../asserts/postgresql.svg"
import expressSvg from "../asserts/express.svg"
import appointMeetImg from "../asserts/project-img/appoint-meet.png"
// import { GithubOutlined, LinkOutlined, CloseOutlined } from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai"
import { FaGithub } from "react-icons/fa"
import { MdClose } from "react-icons/md"

import Modal from "react-modal"

function ProjectCard(props) {
  const [visible, setVisible] = useState(false)

  let onViewDetails = () => {
    setVisible(true)
    // document.getElementsByClassName("project-card-container").className = "project-card-container-details";
  }
  let handleCancel = e => {
    setVisible(false)
  }

  return (
    <div>
      <Modal
        isOpen={visible}
        onRequestClose={handleCancel}
        overlayClassName="project-details-modal-overlay"
        className="project-details-modal"
        closeTimeoutMS={300}
      >
        <div className="project-details-modal-content">
          <div className="project-img">
            <img src={appointMeetImg} alt="project" style={{ width: "100%" }} />
          </div>
          <div className="content-container">
            <MdClose className="close-icon" onClick={handleCancel} />
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
                {props.technologyUsed.map(tech => (
                  <div className="project-technology-card">
                    <img className="img" src={tech.img} alt="react" />
                    <div>{tech.name}</div>
                  </div>
                ))}
              </div>
              {/* <div className="project-technology-card">
                <img className="img" src={expressSvg} alt="express" style={{color:"white"}} />
                <div>ExpressJs</div>
              </div> */}
            </div>
            <div style={{ marginBottom: "50px" }}></div>
            <div className="project-details-button-container">
              {props.button.viewCodeUrl && (
                <div className="project-button">
                  <a href={props.button.viewCodeUrl} target="_blank">
                    <button>
                      <FaGithub
                        style={{ marginRight: "5px" }}
                        className="icon"
                      />
                      View Code
                    </button>
                  </a>
                </div>
              )}
              {props.button.viewProjectUrl && (
                <div className="project-button">
                  <a href={props.button.viewProjectUrl} target="_blank">
                    <button>
                      <AiOutlineLink
                        style={{ marginRight: "5px" }}
                        className="icon"
                      />
                      View Project
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <div className="project-card-container">
          <img src={appointMeetImg} alt="project" />
          <div className="content-container">
            <h2>{props.title}</h2>
            <p>{props.descriptionShort}</p>
            <div className="project-button view-details-button">
              <button onClick={onViewDetails}>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
