import styles from "@/styles/Weather.module.css";
import Search from "./Search";
import MainWeather from "./MainWeather";
import getWeatherData from "../api/getWeather";
import Image from "next/image";
import { useState, useEffect } from "react";
import cannotFind from "../../images/cannotFind.png";

export default function Weather() {
  const [city, setCity] = useState("southport");
  const [weatherData, setWeatherData] = useState("");
  const [cache, setCache] = useState({});
  const [refresh, setRefresh] = useState(false);

  // const resetCache = () => {
  //   setCache({});
  // };
  // setTimeout(resetCache, 30000);

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
        setRefresh(false);
      });
    }
  }, [city, refresh]);

  return (
    <div className={styles.weatherContainer}>
      <Search setCity={setCity} setRefresh={setRefresh} />
      {weatherData.cod === 200 ? (
        <MainWeather weatherData={weatherData} />
      ) : (
        <div className={styles.error}>
          <h3>Oops! Cannot find a city by that name </h3>
          <Image
            src={cannotFind}
            priority
            alt="cannot find city image"
            width={250}
            height={250}
          />
        </div>
      )}
    </div>
  );
}
