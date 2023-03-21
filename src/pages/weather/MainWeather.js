import styles from "@/styles/Weather.module.css";
import WeatherCard from "./WeatherCard";
import WeatherIcon from "./WeatherIcon";
import { TbRefresh } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

export default function MainWeather({ weatherData, setRefresh }) {
  const [rotate, setRotate] = useState(360);
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const weatherDesc = capitalize(weatherData.weather[0].description);
  const temp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const weatherInfoArr = [`${temp}`, feelsLike, humidity, windSpeed];
  const date = new Date().toDateString();
  const iconCode = weatherData.weather[0].icon;

  const btn = document.getElementById("refreshBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      btn.style.transform = `rotate(${rotate}deg)`;
    });
  }
  return (
    <section className={styles.weatherSection}>
      <div className={styles.container}>
        <IoLocationSharp className={styles.locationIcon} />
        <h3 className={styles.locationInfo}>
          {city}, {country} | {date}
        </h3>
        <TbRefresh
          id="refreshBtn"
          onClick={() => {
            setRefresh(true);
          }}
          className={styles.refreshButton}
        />
      </div>
      <h3 className={styles.mainWeatherDesc}>{weatherDesc}</h3>
      <WeatherIcon iconCode={iconCode} />
      <WeatherCard info={weatherInfoArr} />
    </section>
  );
}
