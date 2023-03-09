import styles from "@/styles/Weather.module.css";
import Search from "./Search";
export default function Weather() {
  return (
    <div className={styles.weatherContainer}>
      <Search />
    </div>
  );
}
