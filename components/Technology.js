import styles from '../styles/Technology.module.scss'

import Image from 'next/image'
import { Card } from '@mantine/core'

import { technologyList } from './customValues.js'
function Technology() {
  return (
    <div className={styles.technologyContainer}>
      <h1 className="title">Technologies and Tools I&apos;ve Worked With</h1>

      <div className={styles.technologyCardContainer}>
        {technologyList.map((tech, index) => (
          <Card className={styles.technologyCard} shadow="sm" key={index}>
            <Card.Section>
              <Image
                src={tech.icon}
                width={75}
                height={90}
                // width={'100%'}
                //   width={'100%'}
                //   height={120}
                objectFit="contain"
                alt="Project Img"
                layout="fixed"
              />
              <h3>{tech.name}</h3>
            </Card.Section>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Technology
