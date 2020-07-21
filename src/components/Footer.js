import React from "react";

import "./Footer.css";


import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="icon-container">
        <a href="https://github.com/fenil29" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153" target="_blank">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://twitter.com/FenilKaneria" target="_blank">
          <FaTwitter className="icon" />
        </a>
      </div>
      <div className="footer-text">
        <AiOutlineLink style={{fontSize:"15px",marginRight:"3px"}}/> Designed & Developed by Fenil Kaneria
      </div>
    </div>
  );
}

export default Footer;
