import styles from '../styles/Technology.module.scss'

import Image from 'next/image'
import {
  Modal,
  Button,
  Group,
  Divider,
  Card,
  Text,
  useMantineColorScheme,
  Center,
} from '@mantine/core'

import htmlSvg from '../public/technology-icon/html-5.svg'
import cssSvg from '../public/technology-icon/css-3.svg'
import javaScriptSvg from '../public/technology-icon/javascript.svg'
import pythonSvg from '../public/technology-icon/python.svg'
import opencvSvg from '../public/technology-icon/opencv.svg'
import arduinoSvg from '../public/technology-icon/arduino.svg'
import androidSvg from '../public/technology-icon/android.svg'
import nodejsSvg from '../public/technology-icon/nodejs.svg'
import reactSvg from '../public/technology-icon/react.svg'
import EjsSvg from '../public/technology-icon/ejs.svg'
import postgresqlSvg from '../public/technology-icon/postgresql.svg'
import expressSvg from '../public/technology-icon/express.svg'
import jwtSvg from '../public/technology-icon/jwt.svg'
import mongodbSvg from '../public/technology-icon/mongodb.svg'
import electronSvg from '../public/technology-icon/electron.svg'
import redisSvg from '../public/technology-icon/redis.svg'
import azureSvg from '../public/technology-icon/azure.svg'
import dockerSvg from '../public/technology-icon/docker.svg'
import githubActionsSvg from '../public/technology-icon/github-actions.svg'
import elasticsearchSvg from '../public/technology-icon/elasticsearch.svg'
import sassSvg from '../public/technology-icon/sass.svg'
import nextjsSvg from '../public/technology-icon/nextjs.svg'
import gatsbySvg from '../public/technology-icon/gatsby.svg'
import nginxSvg from '../public/technology-icon/nginx.svg'
import digitalOceanSvg from '../public/technology-icon/digital-ocean.svg'

let technologyList = [
  { name: 'HTML', icon: htmlSvg },
  { name: 'CSS', icon: cssSvg },
  { name: 'SASS', icon: sassSvg },
  { name: 'JavaScript', icon: javaScriptSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'React', icon: reactSvg },
  { name: 'Gatsby', icon: gatsbySvg },
  { name: 'NextJs', icon: nextjsSvg },
  { name: 'ElectronJs', icon: electronSvg },
  { name: 'React Native', icon: reactSvg },
  { name: 'Node Js', icon: nodejsSvg },
  { name: 'ExpressJs', icon: expressSvg },
  { name: 'MongoDB', icon: mongodbSvg },
  { name: 'PostgreSql', icon: postgresqlSvg },
  { name: 'Docker', icon: dockerSvg },
  { name: 'Github Actions', icon: githubActionsSvg },
  { name: 'NginX', icon: nginxSvg },
  { name: 'Digital Ocean', icon: digitalOceanSvg },
  { name: 'Azure', icon: azureSvg },
]
function Technology() {
  return (
    <div className={styles.technologyContainer}>
      <h1 className="title">Technologies I've Worked With</h1>

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
