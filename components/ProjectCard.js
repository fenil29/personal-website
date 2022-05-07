import  { useState } from 'react'
import styles from '../styles/ProjectCard.module.scss'
import Image from 'next/image'
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  useMantineColorScheme,
  ScrollArea,
  Center,
} from '@mantine/core'

import ProjectCardModel from './ProjectCardModel'
import { ListDetails, BrandGithub } from 'tabler-icons-react'

function ProjectCard(props) {
  const [opened, setOpened] = useState(false)
  const handleClose = (e) => {
    setOpened(false)
  }
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <>
      <ProjectCardModel
        {...props}
        opened={opened}
        setOpened={setOpened}
        onClose={handleClose}
      />
      <div className={styles.projectCardContainer}>
        <Card
          shadow="sm"
          radius="md"
          p="lg"
          className={styles.projectCard}
          style={{
            borderWidth: colorScheme === 'dark' ? '0px' : '2px',
          }}
        >
          <Card.Section>
            <Image
              src={props.projectImg}
              height={50}
              width={'100%'}
              // height={160}
              objectFit="cover"
              alt="Project Img"
              layout="responsive"
            />
          </Card.Section>

          <h1 weight={500}>{props.title}</h1>
          <ScrollArea style={{ height: 84 }} scrollHideDelay={0}>
            <div className={styles.badgeContainer}>
              {props.technologyUsed.map((tech, index) => (
                <Badge
                  size="md"
                  // radius={'1px'}
                  color="gray"
                  variant="outline"
                  key={index}
                  className={styles.badge}
                  // p={"5px"}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </ScrollArea>
          {/* <Group position="apart"> */}
          {/* <Text weight={500}>Norway Fjord Adventures</Text> */}
          {/* <Badge color="pink" variant="light">
            Web
          </Badge> */}
          {/* </Group> */}
          <div className={styles.shortDescription}>
            <ScrollArea style={{ height: 94 }} scrollHideDelay={0}>
              {props.descriptionShort}
            </ScrollArea>
          </div>
          <Center>
            <Button
              // variant="subtle"
              variant="outline"
              // size='sm'
              // fullWidth
              onClick={() => setOpened(true)}
              leftIcon={<ListDetails size={18} />}
            >
              View Details
            </Button>
          </Center>
        </Card>
      </div>
    </>
  )
}

export default ProjectCard
