import React from "react"

function NavBarForProject() {
  return (
    <div className="nav-bar">
      <a href="/">
        <div className="left link">Fenil Kaneria</div>
      </a>
      <div className="right">
        <a href="/">
          <div className="link">Projects</div>
        </a>
        <a href="/">
          <div className="link">Technologies</div>
        </a>
        <a href="/">
          <div className="link">Experience and Education</div>
        </a>
        <a href="/">
          <div className="link">Contact me</div>
        </a>
      </div>
    </div>
  )
}

export default NavBarForProject
