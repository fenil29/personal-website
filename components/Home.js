import React from 'react'

import Image from 'next/image'
import profilePic from '../public/fenil.png'
import styles from '../styles/Home.module.scss'

import { ActionIcon } from '@mantine/core'
import { BrandGithub, BrandTwitter, BrandLinkedin } from 'tabler-icons-react'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h3>Hello 👋, I am </h3>
          <h1>Fenil Kaneria</h1>
          <h2>Software Engineer</h2>
          <div className={styles.iconContainer}>
            <a
              href="https://github.com/fenil29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="xl" variant="hover" radius="md">
                <BrandGithub size={32} />
              </ActionIcon>
            </a>
            <a
              href="https://linkedin.com/in/fenil-kaneria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="xl" variant="hover" radius="md">
                <BrandLinkedin size={32} />
              </ActionIcon>
            </a>
            <a
              href="https://twitter.com/FenilKaneria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="xl" variant="hover" radius="md">
                <BrandTwitter size={32} />
              </ActionIcon>
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className="profile-picture"
            src={profilePic}
            objectFit="contain"
            alt="Picture of the author"
            // width={500} automatically provided
            // automatically={true}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Home
