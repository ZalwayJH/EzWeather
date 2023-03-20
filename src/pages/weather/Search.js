import styles from "@/styles/Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";
export default function Search({ setCity, setRefresh }) {
  const [input, setInput] = useState("");

  if (process.browser) {
    const btn = document.getElementById("refreshBtn");
    let rot = 360;
    btn.addEventListener("click", function () {
      btn.style = "transform: rotate(" + rot + "deg)";
      rot += 360;
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(input);
  };

  return (
    <div className={styles.searchBar}>
      <form>
        <TbRefresh
          id="refreshBtn"
          onClick={() => {
            setRefresh(true);
          }}
          className={styles.refreshButton}
        />
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          aria-label="enter location search bar"
          placeholder="Enter location here"
          onSubmit={handleSubmit}
        ></input>
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.searchButton}
        >
          <AiOutlineSearch className={styles.searchIcon}></AiOutlineSearch>
        </button>
      </form>
    </div>
  );
}
