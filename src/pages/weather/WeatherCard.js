import styles from "@/styles/Weather.module.css";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineFaceRetouchingOff } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { TbWind } from "react-icons/tb";

export default function WeatherCard({ info }) {
  const cardNames = ["Temperature", "Feels like", "Humidity", "Wind speed"];
  const icons = [
    <FaTemperatureLow className={styles.icons} />,
    <MdOutlineFaceRetouchingOff className={styles.icons} />,
    <WiHumidity className={styles.icons} />,
    <TbWind className={styles.icons} />,
  ];
  const degC = "\u00b0";
  return (
    <div className={styles.cardContainer}>
      {info.map((item, i) => {
        if (cardNames[i] === "Temperature") {
          item = item + degC;
        }
        if (cardNames[i] === "Feels like") {
          item = item + degC;
        }
        if (cardNames[i] === "Humidity") {
          item = item + "%";
        }
        if (cardNames[i] === "Wind speed") {
          item = item + "mph";
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
