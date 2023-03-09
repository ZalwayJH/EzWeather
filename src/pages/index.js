import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Weather from "./weather/weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Web App</title>
        <h1 className={styles.description}>Weather app</h1>
      </Head>
      <main className={styles.main}>
        <Weather />
      </main>
    </>
  );
}
