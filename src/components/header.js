import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { DivMode } from "react-particles-js"

const Header = ({ siteTitle }) => (
  <p>Header</p>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
