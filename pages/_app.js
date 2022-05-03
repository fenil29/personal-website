import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import "../styles/globals.scss";

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState("light");
  const [customBackgroundColor, setCustomBackgroundColor] = useState([
    "#E9ECEF",
  ]);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  useEffect(() => {
    console.log(colorScheme);
    if (colorScheme === "light") {
      setCustomBackgroundColor(["#E9ECEF"]);
    } else {
      setCustomBackgroundColor(["#373a40"]);
    }

    return () => {
      // second
    };
  }, [colorScheme]);

  return (
    <>
      <Head>
        <title>Page title</title>
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
              "custom-background": customBackgroundColor,
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
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
