import styles from "./home.module.css";
export function HomePage() {
  console.log("Home renderizada");
  return (
    <>
      <div className={styles.home}>
        <h1>Página Home</h1>
      </div>
      <div className={styles.msg}>
        <p>Desculpa pelas estilizações professora, eu estou sem criatividade.</p>
      </div>
      <div className={styles.foto}>
        <img src="https://i.pinimg.com/736x/db/db/8c/dbdb8c03cbc958e1b878aed2436f0d55.jpg" alt="imagem codigo" />
      </div>
    </>
  );
}
