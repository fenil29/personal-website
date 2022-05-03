import React from "react";

import Image from "next/image";
import profilePic from "../public/fenil.png";
import styles from "../styles/Home.module.scss";

import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h1>Fenil Kaneria</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className="profile-picture"
            src={profilePic}
            objectFit="contain"
            alt="Picture of the author"
            // width={500} automatically provided
            // height={"100%"}
            automatically
            provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
