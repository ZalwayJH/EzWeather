import styles from "@/styles/Weather.module.css";
import Search from "./Search";
import MainWeather from "./MainWeather";
import getWeatherData from "../api/getWeather";
import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [cache, setCache] = useState({});

  // const resetCache = () => {
  //   setCache({});
  // };
  // setTimeout(resetCache, 30000);

  console.log(weatherData);

  useEffect(() => {
    if (cache[city]) {
      setWeatherData(cache[city]);
    } else {
      getWeatherData(city).then((data) => {
        setCache((currCache) => {
          const updatedCache = { ...currCache };
          updatedCache[city] = data;
          return updatedCache;
        });
        setWeatherData(data);
      });
    }
  }, [city]);

  return (
    <div className={styles.weatherContainer}>
      <Search setCity={setCity} />
      {weatherData ? <MainWeather weatherData={weatherData} /> : <></>}
    </div>
  );
}
