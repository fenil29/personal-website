import styles from '../styles/Projects.module.scss'

import ProjectCard from './ProjectCard'
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core'
import projects from './projectList'

function Projects() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <div className={styles.projectContainer}>
      <h1 className="title">Projects</h1>
      <div className={styles.projectCardContainer}>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
