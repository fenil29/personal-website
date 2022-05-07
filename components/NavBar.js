import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, Moon } from 'tabler-icons-react'
import styles from '../styles/NavBar.module.scss'

function NavBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <div className={styles.navBarContainer}>
      <ActionIcon
        className={styles.darkModeIcon}
        // variant="outline"
        size="xl"
        // variant="filled"
        // variant="transparent"
        // color={dark ? 'dark' : 'violet'}
        // color="red"
        variant="default"
        radius="md"
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        sx={(theme) => ({
          // color: dark ? 'dark' : theme.colors.blue,
        })}
      >
        {dark ? <Sun size={27} /> : <Moon size={27} />}
      </ActionIcon>
    </div>
  )
}
export default NavBar
