import styles from "@/styles/Search.module.css";

export default function Search() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Enter location here"></input>
    </div>
  );
}
