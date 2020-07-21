import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import Home from "./components/Home";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Projects />
        <Technology />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
