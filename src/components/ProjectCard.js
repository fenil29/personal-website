import React, { useState } from "react";

import "./ProjectCard.css";

import nodejsSvg from "../asserts/nodejs.svg";
import reactSvg from "../asserts/react.svg";
import postgresqlSvg from "../asserts/postgresql.svg";
import expressSvg from "../asserts/express.svg";
import appointMeetImg from "../asserts/project-img/appoint-meet.png";
// import { GithubOutlined, LinkOutlined, CloseOutlined } from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import {  FaGithub } from "react-icons/fa";

import Modal from "react-modal";

function ProjectCard() {
  const [visible, setVisible] = useState(false);

  let onViewDetails = () => {
    setVisible(true);
    // document.getElementsByClassName("project-card-container").className = "project-card-container-details";
  };
  let handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div className="project-outer-div">
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
            {/* <CloseOutlined className="close-icon" onClick={handleCancel} /> */}
            <div className="title">
              <h1>Appoint Meet</h1>
              <h3 className="project-type">Web Application</h3>
            </div>
            <hr />
            <div className="project-details-content">
              <div className="project-description">
                Appoint-Meet is a simple minimal application to manage all
                appointment scheduling process for business and individuals
              </div>
              <br />
              <div>Technology Used:</div>
              <div className="project-technology-container">
                <div className="project-technology-card">
                  <img className="img" src={reactSvg} alt="react" />
                  <div>ReactJs</div>
                </div>
                <div className="project-technology-card">
                  <img className="img" src={nodejsSvg} alt="nodejs" />
                  <div className="name">NodeJs</div>
                </div>
                <div className="project-technology-card">
                  <img className="img" src={expressSvg} alt="expressSvg" />
                  <div className="name">ExpressJs</div>
                </div>
                <div className="project-technology-card">
                  <img className="img" src={postgresqlSvg} alt="postgresql" />
                  <div>PostgreSQL</div>
                </div>
              </div>
              {/* <div className="project-technology-card">
                <img className="img" src={expressSvg} alt="express" style={{color:"white"}} />
                <div>ExpressJs</div>
              </div> */}
            </div>
            <div style={{ marginBottom: "50px" }}></div>
            <div className="project-details-button-container">
              <div className="project-button">
                <button>
                  <FaGithub style={{ marginRight: "5px" }} className="icon" />
                  View Code
                </button>
              </div>
              <div className="project-button">
                <button>
                  <AiOutlineLink
                    style={{ marginRight: "5px" }}
                    className="icon"
                  />
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="project-card-container">
        <img src={appointMeetImg} alt="project" />
        <div className="content-container">
          <h2>Appoint Meet</h2>
          <p>
            Appoint-Meet is a simple minimal application to manage all of your
            appointment scheduling process for business and individuals
          </p>

          <div className="project-button">
            <button onClick={onViewDetails}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
