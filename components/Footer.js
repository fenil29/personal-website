import styles from '../styles/Footer.module.scss'
import { Center, Divider, ActionIcon } from '@mantine/core'
import nextjsSvg from '../public/technology-icon/nextjs2.svg'
import { Link, BrandGithub } from 'tabler-icons-react'

function Footer() {
  return (
    <>
      <Divider my="sm" mb={0} mt={50} />
      <div className={styles.footerContainer}>
        <a
          href="https://github.com/fenil29/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <Link size={18} />
            &nbsp;
            {/* <ActionIcon></ActionIcon> */}
            Designed & Developed by Fenil Kaneria
            {/* © {new Date().getFullYear()}{' '} */}
            {/* <ActionIcon></ActionIcon> */} &nbsp;
            <BrandGithub size={18} />
            &nbsp;
          </p>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          {/* <Image
            src={nextjsSvg}
            width={20}
            height={20}
            // width={'100%'}
            //   width={'100%'}
            //   height={120}
            // objectFit="contain"
            alt="Project Img"
            // pr={5}
            // layout="fixed"
          /> */}
          {/* NextJs */}
        </a>
      </div>
    </>
  )
}

export default Footer
