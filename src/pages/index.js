import styles from "@/styles/Home.module.css";
import Weather from "../Components/weather/Weather";
import Header from "../Components/weather/Header";
import Footer from "../Components/weather/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Weather />
        <Footer />
      </main>
    </>
  );
}
