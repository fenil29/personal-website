const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("Page - " + page.page)
  if (page.path.match(/^\/project/)) {
    createPage({
      path: "/project",
      matchPath: "/project/:name",
      component: path.resolve("src/pages/project.js"),
    })
  }
}
