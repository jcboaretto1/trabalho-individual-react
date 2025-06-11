import { useState } from "react";
import { Button } from "../../components/Button/button";
import styles from "./q2.module.css";
export function Questao02() {
  const [mensagem, setMensagem] = useState("Olá");
  const mudarMensagem = () => {
    setMensagem(mensagem === "Olá" ? "Seja bem-vindo!" : "Olá");
  };
  return (
    <div className={styles.container}>
      <h1>Questão 02</h1>

      <p>{mensagem}</p>

      <Button onClick={mudarMensagem} title="Entrar" type="button" />
    </div>
  );
}
