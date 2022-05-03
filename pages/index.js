import Head from "next/head";
import NavBar from "../components/NavBar";
import Home from "../components/Home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />
    </div>
  );
}