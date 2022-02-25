import React from "react"
import "./NavBar.css"

function NavBar() {
  function scrollToSection(id) {
    var scrollDiv = document.getElementById(id).offsetTop
    window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" })
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="nav-bar">
      <div className="left link" onClick={scrollToTop}>
        Fenil Kaneria
      </div>
      <div className="right">
        <div className="link" onClick={() => scrollToSection("projects")}>Projects</div>
        <div className="link" onClick={() => scrollToSection("technologies")}>Technologies</div>
        <div className="link" onClick={() => scrollToSection("experience-and-education")}>
          Experience and Education
        </div>
        <div className="link" onClick={() => scrollToSection("contact-me")}>Contact me</div>
      </div>
    </div>
  )
}

export default NavBar
