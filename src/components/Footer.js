import React from "react"

import "./Footer.css"
import { AiOutlineLink } from "react-icons/ai"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import gatsbySvg from "../asserts/gatsby.svg"



function Footer() {
  return (
    <footer>
    <div className="footer-container">
      <hr />
      {/* <div className="icon-container">
        <a
          href="https://github.com/fenil29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://twitter.com/FenilKaneria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" />
        </a>
      </div> */}
      {/* <div className="footer-text">
    <AiOutlineLink style={{fontSize:"15px",marginRight:"3px"}}/> Designed & Developed by Fenil Kaneria
  </div> */}
    </div>
    <div className="footer-text">
      <a href="https://github.com/fenil29/personal-website" target="_blank" rel="noopener noreferrer">
        <AiOutlineLink
          style={{ fontSize: "19px", marginRight: "3px" }}
          className="footer-icon"
        />
        Designed & Developed by Fenil Kaneria © {new Date().getFullYear()}{" "}
      </a>
      , Built with
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        <img
          className="footer-icon"
          src={gatsbySvg}
          style={{ height: "20px", marginLeft: "5px" }}
          alt="gatsbySvg"
        />
      </a>
    </div>
  </footer>
  )
}

export default Footer
