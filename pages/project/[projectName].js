import { useRouter } from 'next/router'
import { useState } from 'react'
import ProjectCardModel from '../../components/ProjectCardModel'
import { projects } from '../../components/customValues.js'
import NavBar from '../../components/NavBar'
function ProjectName(props) {
  const router = useRouter()
  //   const [currentProjects, setCurrentProjects] = useState(
  //     projects.filter((p) => p.projectURL === router.query.projectName),
  //   )
  //   const { projectName } = router.query
  //   console.log(currentProjects)
  const handleClose = (e) => {
    // e.preventDefault()
    router.push('/')
  }

  return (
    <div>
      {/* <NavBar /> */}
      <ProjectCardModel
        {...props}
        onClose={handleClose}
        opened={true}
        isDynamicPage={true}
      />
    </div>
  )
}

export default ProjectName

export function getStaticProps(context) {
  // console.log(projects.filter((p) => p.projectURL === context.params.projectName))
  return {
    props: projects.filter(
      (p) => p.projectURL === context.params.projectName,
    )[0],
  }
}

export function getStaticPaths() {
  let allPath = projects.map((p) => ({
    params: {
      projectName: p.projectURL,
    },
  }))

  return {
    paths: allPath,
    fallback: false,
  }
}
