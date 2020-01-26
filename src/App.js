import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";

import { Icon } from "antd";
import "antd/dist/antd.css";

export class App extends Component {
  state = {
    darkMode: false
  };
  handleDarkModeClick=()=>{
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }),
    );
    // ()=>{
      if(this.state.darkMode){
        document.documentElement.style.setProperty('--background-color'," #282c34");
        document.documentElement.style.setProperty('--font-color'," #ffffff");
        document.documentElement.style.setProperty('--icon-color'," #ffffff");
        document.documentElement.style.setProperty('--icon-hover-color'," #282c34");
        document.documentElement.style.setProperty('--icon-hover-background-color'," #ffffff");
      }
      else{
        document.documentElement.style.setProperty('--background-color'," #ffffff");
        document.documentElement.style.setProperty('--font-color'," #000000");
        document.documentElement.style.setProperty('--icon-color'," #282c34");
        document.documentElement.style.setProperty('--icon-hover-color'," #ffffff");
        document.documentElement.style.setProperty('--icon-hover-background-color'," #282c34");
      }
    // }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Particles
            style={{ color: "black" }}
            className="particle-background"
            params={{
              particles: {
                number: {
                  value: 50,
                  density:{
                    enable:true,
                    value_area:800
                  }

                },
                color: {
                  value: this.state.darkMode ? "#000000" : "#ffffff"
                },
                line_linked: {
                  color: this.state.darkMode ? "#000000" : "#ffffff"
                }
              }
            }}
          />
          <div className="dark-mode-icon" onClick={this.handleDarkModeClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3v-6zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm-4.184-.599l-3.593-3.594-1.415 1.414 3.595 3.595c.401-.537.876-1.013 1.413-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.595-3.595-1.414-1.414-3.595 3.595c.537.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.593c-.403.536-.879 1.012-1.415 1.414zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z" />
            </svg>
          </div>
          <div className="particle-background-content">
            <div className="home-text-content">
              <h1>FENIL KANERIA</h1>
              <h2>UNDER CONSTRUCTION</h2>
              <h3>WEBSITE IS COMING SOON</h3>
            </div>

            <div className="home-icons-div">
              <a href="https://github.com/fenil29">
                <div className="home-icon">
                  <Icon type="github" className="home-github-icon" />
                </div>
              </a>
              <a href="https://in.linkedin.com/in/fenil-kaneria-2a76bb153">
                <div className="home-icon">
                  <Icon type="linkedin" className="home-linkedin-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
