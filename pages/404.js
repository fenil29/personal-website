import styles from '../styles/Custom404.module.scss'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { MoodConfuzed } from 'tabler-icons-react'
import { ActionIcon } from '@mantine/core'

function Custom404() {
  return (
    <div className={styles.custom404Container}>
      <NavBar />
      <div className={styles.textContainer}>
        <h1>
          4
          <ActionIcon>
            <MoodConfuzed size={30} />
          </ActionIcon>
          4 | Page Not Found
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Custom404
