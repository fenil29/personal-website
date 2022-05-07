import { useEffect, useState } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

import '../styles/globals.scss'

// let lightModeBackgroundColor = ["#E9ECEF"];
let lightModeBackgroundColor = ['#f8f9fa']
// let darkModeBackgroundColor = ["#373a40"];
let darkModeBackgroundColor = ['#25262b']
export default function App(props) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState('dark')
  const [customBackgroundColor, setCustomBackgroundColor] = useState(
    darkModeBackgroundColor,
  )
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    console.log(colorScheme)
    if (colorScheme === 'light') {
      setCustomBackgroundColor(lightModeBackgroundColor)
    } else {
      setCustomBackgroundColor(darkModeBackgroundColor)
    }

    return () => {
      // second
    }
  }, [colorScheme])

  return (
    <>
      <Head>
        <title>Fenil Kaneria</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              'custom-background': customBackgroundColor,
            },
          }}
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
          // theme={{
          //   /** Put your mantine theme override here */
          //   colorScheme: "light",
          // colors: {
          //   "custom-background": ["#f8f9fa"],
          // },
          // }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
