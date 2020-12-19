import React from "react"
import { Router, Route } from "@reach/router"
import Layout from "../components/layout"
import Index from "./index"
import NotFound from "./404"
import projects from "../project-detail/ProjectDetail"

const SubPage = props => {
  console.log(props)
  let projectName = props.projectname.toLowerCase()
  if (
    projects.filter(function (e) {
      return e.title.toLowerCase() === projectName
    }).length > 0
  ) {
    return <Index projectname={projectName} />
  } else {
    return <NotFound />
  }
}

const project = () => {
  return (
    <Layout>
      <Router basepath="/project">
        <SubPage path="/:projectname" />
      </Router>
    </Layout>
  )
}
export default project
