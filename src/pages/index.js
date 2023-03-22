import styles from "@/styles/Home.module.css";
import Weather from "./weather/Weather";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Weather />
      </main>
    </>
  );
}
