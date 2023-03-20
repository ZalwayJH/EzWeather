import React from "react";
import Image from "next/image";
import styles from "@/styles/Weather.module.css";
// import Icon from "../../images/MyWeatherIcons/brokenClouds.png";

const WeatherIcon = ({ iconCode }) => {
  let width;
  let height;
  const codeLibrary = {
    "01d": "clearSky",
    "02d": "fewClouds",
    "03d": "scatteredClouds",
    "04d": "brokenClouds",
    "09d": "rain",
    "10d": "rain",
    "11d": "thunderStorm",
    "13d": "snow",
    "50d": "clearSky",
    "01n": "clearSkyNight",
    "02n": "fewClouds",
    "03n": "scatteredClouds",
    "04n": "brokenClouds",
    "09n": "rainNight",
    "10n": "rainNight",
    "11n": "thunderStorm",
    "13n": "snowNight",
    "50n": "clearSkyNight",
  };

  return (
    <div>
      <Image
        className={styles.weatherIcon}
        src={`/MyWeatherIcons/${codeLibrary[iconCode]}.png`}
        alt="Weather Icon"
        width={450}
        height={440}
      />
    </div>
  );
};

export default WeatherIcon;
