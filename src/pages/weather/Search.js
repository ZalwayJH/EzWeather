import styles from "@/styles/Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function Search({ setCity }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(input);
    setInput("");
  };

  return (
    <div className={styles.searchBar}>
      <form>
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
