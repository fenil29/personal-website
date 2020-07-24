/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"
import "./Footer.css"

import { AiOutlineLink } from "react-icons/ai"
import { GrGatsbyjs } from "react-icons/gr"

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import gatsbySvg from "../asserts/gatsby.svg"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <main>{children}</main>
      <footer>
        <div className="footer-container">
          <hr />
          <div className="icon-container">
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
          </div>
          {/* <div className="footer-text">
        <AiOutlineLink style={{fontSize:"15px",marginRight:"3px"}}/> Designed & Developed by Fenil Kaneria
      </div> */}
        </div>
        <div className="footer-text">
          <AiOutlineLink style={{ fontSize: "17px", marginRight: "3px" }}    className="footer-icon"/>
          Designed & Developed by Fenil Kaneria © {new Date().getFullYear()},
          Built with
          <a href="https://www.gatsbyjs.org" >
            <img
              className="footer-icon"
              src={gatsbySvg}
              style={{ height: "20px", marginLeft: "5px" }}
              alt="gatsbySvg"
            />
          </a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
