import styles from "@/styles/Weather.module.css";
import Search from "./Search";
import MainWeather from "./MainWeather";
import getWeatherData from "../../api/getWeather";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import cannotFind from "../../../public/MyWeatherIcons/cannotFind.png";

export default function Weather() {
  const [city, setCity] = useState("london");
  const [weatherData, setWeatherData] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      getWeatherData(city).then((data) => {
        setWeatherData(data);
        setRefresh(false);
        setLoading(false);
      });
    }
  }, [city, refresh]);

  return (
    <div className={styles.weatherContainer}>
      <Search setCity={setCity} />
      {loading || refresh ? (
        <div className={styles.progressBar}>
          <BeatLoader color="#36d7b7" size="50px" />
        </div>
      ) : weatherData.cod === 200 ? (
        <MainWeather weatherData={weatherData} setRefresh={setRefresh} />
      ) : (
        <div className={styles.error}>
          <h3 className={styles.oops}>
            Oops! Cannot find a city by that name{" "}
          </h3>
          <Image
            src={cannotFind}
            priority
            alt="cannot find city image"
            width={270}
            height={250}
          />
        </div>
      )}
    </div>
  );
}
