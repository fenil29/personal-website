import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";

import { Icon, Progress, Spin } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Particles
          className="particle-background"
          params={{
            particles: {
              number: {
                value: 50
              },
            }
          }}
        />
        <div className="particle-background-content">
          <div className="home-text-content">
            <h1>FENIL KANERIA</h1>
            <h2>UNDER CONSTRUCTION</h2>
            <h3>WEBSITE IS COMING SOON</h3>
          </div>

          <div className="home-icons-div">
            <div className="home-icon">
              <a href="https://github.com/fenil29">
                <Icon type="github" className="home-github-icon" />
              </a>
            </div>
            <div className="home-icon">
              <a href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153">
                <Icon type="linkedin" className="home-linkedin-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
