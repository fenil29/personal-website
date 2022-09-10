import styles from '../styles/EandE.module.scss'
import { Text, Timeline } from '@mantine/core'
import { Book2, Briefcase, Building } from 'tabler-icons-react'
function EandE() {
  return (
    <div className={styles.eandeContainer}>
      <h1 className="title">Experience and Education</h1>
      <div className={styles.timelineContainer}>
        <Timeline lineWidth={3} radius="md">
          <Timeline.Item
            title="Front-End Development Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Nuance Communications
            </Text>
            <Text size="md" mt={4}>
              Sep 2022 - Present
            </Text>
          </Timeline.Item>
          <Timeline.Item
            title="Master of Applied Computing"
            bulletSize={50}
            bullet={<Book2 size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              University of Windsor
            </Text>
            <Text size="md" mt={4}>
              Sep 2021 - Present
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Technology Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Thomson Reuters
            </Text>
            <Text size="md" mt={4}>
              Jan 2021 – June 2021
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Ways Software
            </Text>
            <Text size="md" mt={4}>
              Apr 2020 - Jul 2020
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Bhavi Technologies
            </Text>
            <Text size="md" mt={4}>
              May 2019 - Jun 2019
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Bachelor of Technology in Computer Science and Engineering"
            bulletSize={50}
            bullet={<Book2 size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Charusat University
            </Text>
            <Text size="md" mt={4}>
              June 2017 – June 2021
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default EandE
