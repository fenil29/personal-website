import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Projects from "./components/Projects";
import Home from "./components/Home";

export class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Projects />
      </>
    );
  }
}

export default App;
