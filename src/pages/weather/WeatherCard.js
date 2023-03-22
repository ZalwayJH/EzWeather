import styles from "@/styles/Cards.module.css";
import Image from "next/image";

export default function WeatherCard({ info }) {
  const cardNames = ["Temperature", "Feels like", "Humidity", "Wind speed"];
  const icons = [
    <Image
      src="/MyWeatherIcons/temperatureIcon.png"
      alt="temperature icon"
      width={90}
      height={90}
      className={styles.icons}
    />,
    <Image
      src="/MyWeatherIcons/feelsLikeIcon.png"
      alt="feels like icon"
      width={90}
      height={90}
      className={styles.icons}
    />,
    <Image
      src="/MyWeatherIcons/humidityIcon.png"
      alt="feels like icon"
      width={90}
      height={90}
      className={styles.icons}
    />,
    <Image
      src="/MyWeatherIcons/windyIcon.png"
      alt="wind speed icon"
      width={90}
      height={90}
      className={styles.icons}
    />,
  ];
  const degC = "\u00b0";

  return (
    <div className={styles.cardContainer}>
      {info.map((item, i) => {
        if (cardNames[i] === "Temperature") {
          item += degC;
        }
        if (cardNames[i] === "Feels like") {
          item += degC;
        }
        if (cardNames[i] === "Humidity") {
          item += "%";
        }
        if (cardNames[i] === "Wind speed") {
          item += "mph";
        }

        return (
          <div key={i} className={styles.cards}>
            <h3 className={styles.cardName}>{cardNames[i]}</h3>
            {icons[i]}
            <h4 className={styles.cardInfo}>{item}</h4>
          </div>
        );
      })}
    </div>
  );
}
