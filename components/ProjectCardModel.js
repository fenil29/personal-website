import styles from '../styles/ProjectCardModel.module.scss'
import {
  Modal,
  Button,
  Divider,
  Card,
  useMantineColorScheme,
} from '@mantine/core'
import Image from 'next/image'

import { Browser, BrandGithub } from 'tabler-icons-react'
function ProjectCardModel(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <>
      <Modal
        opened={props.opened}
        onClose={props.onClose}
        // title="Introduce yourself!"
        className={styles.projectDetailModel}
        // overlayOpacity={0}
        overlayBlur={3}
      >
        <div
          className={styles.outerContainer}
          //   style={{
          //     backgroundColor:
          //       colorScheme === 'dark'
          //         ? ''
          //         : ' var(--mantine-color-custom-background-0)',
          //   }}
        >
          <div
            className={styles.imageContainer}
            style={{
              backgroundColor:
                colorScheme === 'dark'
                  ? 'var(--mantine-color-custom-background-0)'
                  : '',
            }}
          >
            <Image
              src={props.projectImg}
              //   height={40}
              //   width={'100%'}
              //   height={160}
              objectFit="contain"
              alt="Project Img"
              layout="intrinsic"
            />
          </div>
          <div
            className={styles.detailContainer}
            style={{
              backgroundColor:
                colorScheme === 'dark'
                  ? ''
                  : ' var(--mantine-color-custom-background-0)',
            }}
          >
            <h1>{props.title}</h1>
            <Divider my="sm" />
            <h2>{props.type}</h2>
            <p>{props.descriptionLong}</p>
            <div className={styles.technologyCardContainer}>
              {props.technologyUsed.map((tech, index) => (
                <Card className={styles.technologyCard} shadow="sm" key={index}>
                  <Card.Section>
                    <Image
                      src={tech.img}
                      width={55}
                      height={50}
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
            <div className={styles.buttonContainer}>
              {props.button.viewProjectUrl.length > 0 && (
                <a
                  href={props.button.viewProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={<Browser size={18} />} variant="outline">
                    View Live Project
                  </Button>
                </a>
              )}
              {props.button.viewCodeUrl.length > 0 && (
                <a
                  href={props.button.viewCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    leftIcon={<BrandGithub size={18} />}
                    variant="outline"
                  >
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProjectCardModel
