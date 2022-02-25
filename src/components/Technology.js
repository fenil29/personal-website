import React from "react";
import "./Technology.css";

import htmlSvg from "../asserts/html-5.svg";
import cssSvg from "../asserts/css-3.svg";
import javaScriptSvg from "../asserts/javascript.svg";
import pythonSvg from "../asserts/python.svg";
import nodejsSvg from "../asserts/nodejs.svg";
import reactSvg from "../asserts/react.svg";
import postgresqlSvg from "../asserts/postgresql.svg";
import expressSvg from "../asserts/express.svg";
import mongodbSvg from "../asserts/mongodb.svg";
import gatsbySvg from "../asserts/gatsby.svg";
import electronSvg from "../asserts/electron.svg";
import dockerSvg from "../asserts/docker.svg";
import githubActionsSvg from "../asserts/github-actions.svg";
import nginxSvg from "../asserts/nginx.svg";
import digitalOceanSvg from "../asserts/digital-ocean.svg";
import azureSvg from "../asserts/azure.svg";

function Technology() {
  return (
    <div className="technologies-container main-container">
      <h1 className="title" id="technologies" >Technologies I've Worked With</h1>
      <div className="technology-card-container">
        <div className="technology-card">
          <img className="img" src={htmlSvg} alt="htmlSvg" />
          <div className="name">HTML</div>
        </div>
        <div className="technology-card">
          <img className="img" src={cssSvg} alt="cssSvg" />
          <div className="name">CSS</div>
        </div>
        <div className="technology-card">
          <img className="img" src={javaScriptSvg} alt="javaScriptSvg" />
          <div className="name">JavaScript</div>
        </div>
        <div className="technology-card">
          <img className="img" src={pythonSvg} alt="pythonSvg" />
          <div className="name">Python</div>
        </div>
        <div className="technology-card">
          <img className="img" src={reactSvg} alt="reactSvg" />
          <div className="name">React</div>
        </div>
        <div className="technology-card">
          <img className="img" src={gatsbySvg} alt="gatsbySvg" />
          <div className="name">Gatsby</div>
        </div>
        <div className="technology-card">
          <img className="img" src={electronSvg} alt="electronSvg" />
          <div className="name">ElectronJs</div>
        </div>
        <div className="technology-card">
          <img className="img" src={reactSvg} alt="reactSvg" />
          <div className="name">React Native</div>
        </div>
        <div className="technology-card">
          <img className="img" src={nodejsSvg} alt="nodejs" />
          <div className="name">Node Js</div>
        </div>
        <div className="technology-card">
          <img className="img" src={expressSvg} alt="expressSvg" />
          <div className="name">ExpressJs</div>
        </div>
        <div className="technology-card">
          <img className="img" src={mongodbSvg} alt="mongodbSvg" />
          <div className="name">MongoDB</div>
        </div>
        <div className="technology-card">
          <img className="img" src={postgresqlSvg} alt="postgresqlSvg" />
          <div className="name">PostgreSql</div>
        </div>        
        <div className="technology-card">
          <img className="img" src={dockerSvg} alt="postgresqlSvg" />
          <div className="name">Docker</div>
        </div>        
        <div className="technology-card">
          <img className="img" src={githubActionsSvg} alt="GithubActions" />
          <div className="name">Github Actions</div>
        </div>        
        <div className="technology-card">
          <img className="img" src={nginxSvg} alt="postgresqlSvg" />
          <div className="name">NginX</div>
        </div>        
        <div className="technology-card">
          <img className="img" src={digitalOceanSvg} alt="postgresqlSvg" />
          <div className="name">Digital Ocean</div>
        </div>        
        <div className="technology-card">
          <img className="img" src={azureSvg} alt="postgresqlSvg" />
          <div className="name">Azure</div>
        </div>        
      </div>
    </div>
  );
}

export default Technology;
