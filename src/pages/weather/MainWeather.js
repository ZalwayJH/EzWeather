import styles from "@/styles/Weather.module.css";
import WeatherCard from "./WeatherCard";
import WeatherIcon from "./WeatherIcon";
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
  const iconCode = weatherData.weather[0].icon;

  return (
    <section>
      <div className={styles.container}>
        <h3 className={styles.locationInfo}>
          {city}, {country} | {date}
        </h3>
      </div>
      <h3 className={styles.mainWeatherTitle}>{weatherMain}</h3>
      <h3 className={styles.mainWeatherDesc}>{weatherDesc}</h3>
      <WeatherIcon iconCode={iconCode} />
      <WeatherCard info={weatherInfoArr} />
    </section>
  );
}
