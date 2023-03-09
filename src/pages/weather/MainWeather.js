import styles from "@/styles/Weather.module.css";

export default function MainWeather({ weatherData }) {
  return (
    <section className={styles.container}>
      <h3 className={styles.locationInfo}>
        {weatherData.name}, {weatherData.sys.country}
      </h3>
      <h3>{weatherData.weather[0].main}</h3>
      <h3>{weatherData.weather[0].description}</h3>
      <h4>{weatherData.main.temp}</h4>
      <h3>feels like {weatherData.main.feels_like}</h3>
      <h4></h4>
    </section>
  );
}
