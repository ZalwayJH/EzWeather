import styles from "@/styles/Weather.module.css";
import WeatherCard from "./WeatherCard";
import Image from "next/image";

export default function MainWeather({ weatherData }) {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const weatherMain = weatherData.weather[0].main;
  const weatherDesc = weatherData.weather[0].description;
  const temp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const weatherInfoArr = [`${temp}`, feelsLike, humidity, windSpeed];
  const date = new Date().toDateString();
  const icon = weatherData.weather[0].icon;

  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.locationInfo}>
          {city}, {country} | {date}
        </h3>
      </div>
      <h3 className={styles.mainWeatherTitle}>{weatherMain}</h3>
      <h3 className={styles.mainWeatherDesc}>{weatherDesc}</h3>
      <Image
        className={styles.weatherIcon}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
        width={250}
        height={250}
      />
      <WeatherCard info={weatherInfoArr} />
    </section>
  );
}
