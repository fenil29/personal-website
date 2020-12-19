import React from "react"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/Home"
import Projects from "../components/Projects"
import Technology from "../components/Technology"
import Contact from "../components/Contact"
import 'antd/dist/antd.css';

const IndexPage = (props) => (
  <Layout>    
    <SEO title="Fenil Kaneria" />
    <Home />
    <Projects projectname={props.projectname}/>
    <Technology />
    <Contact />
  </Layout>
)

export default IndexPage
