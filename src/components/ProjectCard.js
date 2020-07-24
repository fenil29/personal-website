import React, { useState } from "react"
import "./ProjectCard.css"
import { Button } from "antd"
// import { GithubOutlined, LinkOutlined, CloseOutlined } from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai"
import { FaGithub } from "react-icons/fa"
import { MdClose } from "react-icons/md"

import Modal from "react-modal"
import Image from "../components/image"

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
            {/* <img src={appointMeetImg} alt="project" style={{ width: "100%" }} /> */}
            {/* <CardPreviewImage name={"appoint-meet.png"} alt="project-image" /> */}
            <Image type={"details-image"} filename={props.imgName} />
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
                {props.technologyUsed.map((tech, index) => (
                  <div className="project-technology-card" key={index}>
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
                     icon={ <AiOutlineLink
                      style={{ marginRight: "5px" }}
                      className="icon"
                    />}
                    >
                     
                      View Project
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <div className="project-card-container">
          {/* <img src={appointMeetImg} alt="project" /> */}
          {/* <CardPreviewImage name={"appoint-meet.png"} alt="project-image"/> */}
          {/* <CardImgComponents /> */}
          <Image type={"card-image"} filename={props.imgName} />

          <div className="content-container">
            <h2>{props.title}</h2>
            <div className="paragraph-container">
              <p>{props.descriptionShort}</p>
            </div>
            <div className="project-button view-details-button">
              <Button onClick={onViewDetails}>View Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
