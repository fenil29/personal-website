import React from "react"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Technology from "../components/Technology"
import History from "../components/History"
import Contact from "../components/Contact"
import 'antd/dist/antd.css';

const IndexPage = () => (
  <Layout>    
    <SEO title="Fenil Kaneria" />
    {/* <NavBar /> */}
    <Home />
    <Projects />
    <Technology />
    <History />
    <Contact />
  </Layout>
)

export default IndexPage
