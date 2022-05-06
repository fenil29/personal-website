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
} from '@mantine/core'

function ProjectCard(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <div className={styles.projectCardContainer}>
      <Card
        shadow="sm"
        p="lg"
        className={styles.projectCard}
        style={{
          borderWidth: colorScheme === 'dark' ? '0px' : '2px',
        }}
      >
        <Card.Section>
          <Image
            src={props.projectImg}
            height={45}
            width={"100%"}
            // height={160}
            objectFit="cover"
            alt="Project Img"
            layout="responsive"
          />
        </Card.Section>

        <h1 weight={500}>{props.title}</h1>
        {/* <Group position="apart"> */}
        {/* <Text weight={500}>Norway Fjord Adventures</Text> */}
        {/* <Badge color="pink" variant="light">
            Web
          </Badge> */}
        {/* </Group> */}

        <p>{props.descriptionShort}</p>

        <Button variant="subtle" fullWidth>
          View Details
        </Button>
      </Card>
    </div>
  )
}

export default ProjectCard
