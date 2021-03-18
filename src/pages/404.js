import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Fenil Kaneria" />
    <div className="not-found">
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <div className="text">You just hit a route that doesn&#39;t exist...</div>
    </div>
  </Layout>
)

export default NotFoundPage
