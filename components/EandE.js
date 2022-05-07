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
            title="Master of Applied Computing"
            bulletSize={40}
            bullet={<Book2 size={20} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="sm">
              University of Windsor
            </Text>
            <Text size="xs" mt={4}>
              Sep 2021 - Present
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Technology Intern"
            bulletSize={40}
            bullet={<Building size={20} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="sm">
              Thomson Reuters
            </Text>
            <Text size="xs" mt={4}>
              Jan 2021 – June 2021
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={40}
            bullet={<Building size={20} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="sm">
              Ways Software
            </Text>
            <Text size="xs" mt={4}>
              Apr 2020 - Jul 2020
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={40}
            bullet={<Building size={20} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="sm">
              Bhavi Technologies
            </Text>
            <Text size="xs" mt={4}>
              May 2019 - Jun 2019
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Bachelor of Technology in Computer Science and Engineering"
            bulletSize={40}
            bullet={<Book2 size={20} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="sm">
              Charusat University
            </Text>
            <Text size="xs" mt={4}>
              June 2017 – June 2021
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default EandE
