import React from "react"
import { Link } from "gatsby"

import "./index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Home from "../components/Home"
import Projects from "../components/Projects"
import Technology from "../components/Technology"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Projects />
    <Technology />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
