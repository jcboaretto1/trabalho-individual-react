import styles from "./home.module.css";
export function HomePage() {
  console.log("HomePage sendo renderizada"); // Debug
  return (
    <div className={styles.home}>
      <h1>Página Home</h1>
    </div>
  );
}
