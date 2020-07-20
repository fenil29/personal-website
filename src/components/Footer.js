import React from "react";

import "./Footer.css";

import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  LinkOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="icon-container">
        <a href="https://github.com/fenil29" target="_blank">
          <GithubOutlined className="icon" />
        </a>
        <a href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153" target="_blank">
          <LinkedinOutlined className="icon" />
        </a>
        <a href="https://twitter.com/FenilKaneria" target="_blank">
          <TwitterOutlined className="icon" />
        </a>
      </div>
      <div className="footer-text">
        <LinkOutlined /> Designed & Developed by Fenil Kaneria
      </div>
    </div>
  );
}

export default Footer;
